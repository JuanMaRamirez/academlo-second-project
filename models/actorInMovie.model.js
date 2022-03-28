const { DataTypes } = require('sequelize');
const { sequelize } = require('../util/database');

const { Actor } = require('./actor.model');
const { Movie } = require('./movie.model');

const ActorInMovie = sequelize.define('actorInMovie', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  actorId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  movieId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = { ActorInMovie };
