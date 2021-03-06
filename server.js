import path from 'path';
import fs from 'fs';
import express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import * as AppMain from './src/containers/App';

const port = process.env.PORT || 3000;
const app = express();
const store = configureStore();

// for IBM cloud
app.enable('trust proxy');

function handleRender(req, res) {
  const html = renderToString(
    <Provider store={store}>
      <AppMain.App />
    </Provider>
  );
  
  
  fs.readFile('dist/public/main.html', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

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

app.use((req, res, next) => {
  if (req.secure || process.env.BLUEMIX_REGION === undefined) {
    next();
  } else {
    console.log('redirecting to https');
    res.redirect('https://' + req.headers.host + req.url);
  }
});
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', handleRender);
app.get('*', handle404);

app.listen(port, () => console.log(`listening on port ${port}`));
