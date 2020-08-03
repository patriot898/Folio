import express from 'express';
import path from 'path';
import fs from 'fs';
import expressStaticGzip from 'express-static-gzip';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../client/src/components/_App.jsx';

const app = express();
const reactApp = ReactDOMServer.renderToString(<App />);

const port = 3000;

const publicFolder = '/Users/kieferragay/Documents/Personal_Projects/Folio/client/public';
// const publicFolder = path.resolve(__dirname, 'client', 'public'); // for use without es6 comp
const publicHTML = path.resolve(publicFolder, 'index.html');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', expressStaticGzip(publicFolder));

app.listen(port, () => {
  console.log(`Connected and listening on ${port}!`);
});

app.get('/', (req, res) => {
  // res.send(publicHTML); //for use without SSR
  fs.readFile(publicHTML, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong: ', err);
      return res.status(500).send('Oops, better luck next time!');
    }
    return res.send(
      data.replace('<div id="app"></div>', `<div id="app">${reactApp}</div`),
    );
  });
});
