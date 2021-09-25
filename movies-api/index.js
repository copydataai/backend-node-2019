const express = require('express');

const app = express();

const { config } = require('./config');

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/json', (req, res) => {
  res.json({ hello: 'World' });
});

app.listen(config.port, () => {
  console.log(`Listening in http://localhost:${config.port}`);
});
