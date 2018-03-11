import path from 'path';
import fs from 'fs';
import express from 'express';
import favicon from 'serve-favicon';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from './lib/store/configureStore';
import * as AppMain from './lib/containers/App';

const port = 3000;
const app = express();
const store = configureStore();

function handleRender(req, res) {
  const html = renderToString(
    <Provider store={store}>
      <AppMain.App />
    </Provider>
  );

  fs.readFile('views/index.html', 'utf8', (err, data) => {
    const document = data.replace(
      /<div id="candy-calc"><\/div>/,
      `<div id="candy-calc">${html}</div>`
    );
    res.send(document);
  });
}

function handle404(req, res) {
  res.status(404).send('<h1>404 Not Found</h1>');
}

app.use(favicon(path.join(__dirname, 'static', 'favicon.png')));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', handleRender);
app.get('*', handle404)
app.listen(port);
