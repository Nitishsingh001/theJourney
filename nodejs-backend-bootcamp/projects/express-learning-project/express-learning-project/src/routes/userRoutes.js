const express = require('express');
const router = express.Router(); // a mini, mountable Express app

const {
  getUsers, getUser, createUser, updateUser, deleteUser,
} = require('../controllers/userController');
const { validateUser } = require('../middleware/validate');

// GET /api/users, POST /api/users
router.route('/')
  .get(getUsers)
  .post(validateUser, createUser); // middleware chain: validate -> then create

// GET /api/users/:id, PUT /api/users/:id, DELETE /api/users/:id
router.route('/:id')
  .get(getUser)
  .put(validateUser, updateUser)
  .delete(deleteUser);

module.exports = router;
