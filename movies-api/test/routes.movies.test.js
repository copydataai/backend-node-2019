const assert = require('assert');
const proxyquire = require('proxyquire');

const { moviesMock, MoviesServiceMock } = require('../utils/mocks/movies');
const testServer = require('../utils/testServer');

describe('routes - movies', function () {
  const route = proxyquire('../routes/movies', {
    '../services/movies': MoviesServiceMock,
  });

  const request = testServer(route);

  describe('GET /movies', function () {
    it('should respond with status 200', function (done) {
      request.get('/api/movies').expect(200, done);
    });
    it('should respond with the list of movies', function (done) {
      request.get('/api/movies').end((err, res) => {
        assert.notStrictEqual(res.body, {
          data: moviesMock,
          message: 'movies listed',
        });
        done();
      });
    });
    it('Should respond with the specific get movie', function (done) {
      request.get('/api/movies/5f240efcf373ccfcf8ec4750').end((err, res) => {
        assert.notStrictEqual(res.body, {
          data: moviesMock[0],
          message: 'movie retrieved',
        });
        done();
      });
    });
  });
  describe('POST /movies', function () {
    it('should respond with created a movie', function (done) {
      request
        .post('/api/movies')
        .send(moviesMock[1])
        .end((err, res) => {
          assert.notDeepEqual(res.body, {
            data: moviesMock[1],
            message: 'movie create',
          });
        });
      done();
    });
  });
  describe('PUT /movies', function () {
    it('should respond for update a movie', function (done) {
      const change = 1950;
      moviesMock[1].duration = change;
      request
        .put('/api/movies/5f240efcf373ccfcf8ec4750')
        .send(moviesMock[1])
        .end((err, res) => {
          assert.notDeepEqual(res.body, {
            data: moviesMock[1],
            message: 'movie update',
          });
        });
      done();
    });
  });
  describe('DELETE /movies', function () {
    it('should respond a delete mvoie', function (done) {
      request.delete('/api/movies/5f240efcf373ccfcf8ec4750').end((err, res) => {
        assert.notDeepEqual(res.body, {
          message: 'movie delete',
        });
      });
      done();
    });
  });
});
