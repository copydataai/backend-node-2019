const express = require('express');

const app = express();
const router = require('./routes/movies');

const { config } = require('./config');
const moviesApi = require('./routes/movies');

moviesApi(app);

app.listen(config.port, () => {
  console.log(`Listening in http://localhost:${config.port}`);
});
