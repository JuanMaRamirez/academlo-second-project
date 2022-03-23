const express = require('express');

const {
  getAllActors,
  getActorById,
  createActor,
  updateActor,
  deleteActor
} = require('../controllers/actors.controller');

const router = express.Router();

router.get = ('/', getAllActors);
router.get('/', getActorById);
router.post('/', createActor);
router.patch('/:id', updateActor);
router.delete('/:id', deleteActor);

module.exports = { actorsRouter: router };
