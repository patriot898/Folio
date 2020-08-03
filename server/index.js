const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

const publicFolder = path.join(__dirname, '../', 'client', 'public');
const publicHTML = path.join(publicFolder, 'index.html');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(publicFolder));

app.listen(port, () => {
  console.log(`Connected and listening on ${port}!`);
});

app.get('/', (req, res) => {
  res.send(publicHTML);
});
