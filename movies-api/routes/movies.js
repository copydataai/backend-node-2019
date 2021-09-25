const express = require('express');
const { moviesMock } = require('../utils/mocks/movies');

function moviesApi(app) {
  const router = express.Router();

  app.use('/api/movies', router);

  router.get('/', async function (req, res, next) {
    try {
      const data = await Promise.resolve(moviesMock);
      res.status(200).json({
        data: data,
        message: 'movies Listend',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/:movieId', async function (req, res, next) {
    try {
      const data = await Promise.resolve(moviesMock[0]);
      res.status(200).json({
        data: data,
        message: 'movie retrieve',
      });
    } catch (error) {
      next(error);
    }
  });
  router.post('/', async function (req, res, next) {
    try {
      const createdMovieId = await Promise.resolve(moviesMock[0].id);
      res.status(200).json({
        data: createdMovieId,
        message: 'movie Create',
      });
    } catch (error) {
      next(error);
    }
  });
  router.put('/:movieId', async function (req, res, next) {
    try {
      const updatedMovieId = await Promise.resolve(moviesMock[0].id);
      res.status(200).json({
        data: updatedMovieId,
        message: 'movies updated',
      });
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:movieId', async function (req, res, next) {
    try {
      const deleteMovieId = await Promise.resolve(moviesMock[0].id);
      res.status(200).json({
        data: deleteMovieId,
        message: 'movies deleted',
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = moviesApi;
