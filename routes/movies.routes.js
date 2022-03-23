const express = require('express');

const {
  getAllMovies,
  getMoviesById,
  createMovie,
  updateMovie,
  deleteMovie
} = require('../controllers/movies.controller');

const router = express.Router();

router.get('/', getAllMovies);

router.get('/', getMoviesById);

router.post('/:id', createMovie);

router.patch('/:id', updateMovie);

router.delete('/:id', deleteMovie);

module.exports = { moviesRouter: router };
