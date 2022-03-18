const { User } = require('../models/user.model');
const { Actor } = require('../models/actor.model');
const { Movie } = require('../models/movie.model');
const { Review } = require('../models/review.model');
const { ActorInMovie } = require('../models/actorInMovie.model');

const initModel = () => {
  //User to Review
  User.hasMany(Review);
  Review.belongsTo(User);

  //Movie to actor
  Movie.belongsToMany(Actor, { through: ActorInMovie });
  Actor.belongsToMany(Movie, { through: ActorInMovie });

  //Movie to review
  Movie.hasMany(Review);
  Review.belongsTo(Movie);
};
