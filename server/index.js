import express from 'express';
import path from 'path';
import fs from 'fs';
import expressStaticGzip from 'express-static-gzip';
import dotenv from 'dotenv';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../client/src/components/_App.jsx';

dotenv.config();

const app = express();
const reactApp = ReactDOMServer.renderToString(<App />);

const port = process.env.SERVER_PORT || 3000;

const publicFolder = process.env.PUBLIC_DIRECTORY || path.resolve('../', 'client', 'public');
// const publicFolder = path.resolve(__dirname, 'client', 'public'); // for use without es6 comp
const publicHTML = path.resolve(publicFolder, 'index.html');
const secretHTML = path.resolve(publicFolder, 'secret.html');

const manageError = (res, err) => {
  if (err) {
    console.error('Something went wrong: ', err);
    return res.status(500).send('Oops, better luck next time!');
  // eslint-disable-next-line no-else-return
  } else {
    return null;
  }
};

const sendHTMLSSR = (req, res, htmlFile, replacedStatement, replacement) => {
  fs.readFile(htmlFile, 'utf8', (err, data) => (
    manageError(res, err) || res.send(
      data.replace(replacedStatement, replacement),
    )
  ));
};

const sendHTMLBasic = (req, res, htmlFile) => {
  fs.readFile(htmlFile, 'utf8', (err, data) => (
    manageError(res, err) || res.send(data)
  ));
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', expressStaticGzip(publicFolder));

app.listen(port, () => {
  console.log(`Connected and listening on ${port}!`);
});

app.get('/', (req, res) => {
  sendHTMLSSR(req, res, publicHTML, '<div id="app"></div>', `<div id="app">${reactApp}</div`);
});

app.get('/secret', (req, res) => {
  sendHTMLBasic(req, res, secretHTML);
});
