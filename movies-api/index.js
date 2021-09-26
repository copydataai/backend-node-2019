const express = require('express');
const logger = require('morgan');

const app = express();

const { config } = require('./config');
const moviesApi = require('./routes/movies');

const {
  logErrors,
  wrapErrors,
  errorHandler,
} = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

app.use(logger('dev'));
// Body parser
app.use(express.json());

// routes
moviesApi(app);

// Catch 404
app.use(notFoundHandler);

// Errors middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening in http://localhost:${config.port}`);
});
