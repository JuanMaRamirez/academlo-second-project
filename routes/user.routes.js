const express = require('express');

//Controllers
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('../controllers/user.controller');

const {
  validateSession,
  protectAdmin
} = require('../middlewares/auth.middleware');
const {
  userExists,
  protectAccountOwner
} = require('../middlewares/users.middleware');

const router = express.Router();

router.post('/', createUser);

router.post('/login', loginUser);

router.use(validateSession);

router.get('/', protectAdmin, getAllUsers);

router
  .use('/:id', userExists)
  .route('/:id')
  .get(getUserById)
  .patch(protectAccountOwner, updateUser)
  .delete(protectAccountOwner, deleteUser);

module.exports = { usersRouter: router };
