const express = require('express');
const { moviesMock } = require('../utils/mocks/movies');

function moviesApi(app) {
  const router = express.Router();

  app.use('/api/movies', router);

  router.get('/', async function (req, res, next) {
    try {
      const data = await Promise.resolve(moviesMock);
      res.status(200).json({
        data: moviesMock,
        message: 'movies Listend',
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = moviesApi;
