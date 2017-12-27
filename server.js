const path = require('path');
const fs = require('fs');
const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const App = require('./lib/containers/App');

const port = 3000;
const app = express();

function handleRender(req, res) {
  const html = renderToString( <App /> );

  fs.readFile('views/index.html', 'utf8', (err, data) => {
    const document = data.replace(
      /<div id="candy-calc"><\/div>/,
      `<div id="candy-calc">${html}</div>`
    );
    res.send(document);
  });
}

app.use(express.static(path.join(__dirname, 'build')));
app.use('/', handleRender);
app.listen(port);
