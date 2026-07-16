// The "C" in MVC - takes the Request, talks to the Model, sends the Response.
const UserModel = require('../models/userModel');
const { AppError } = require('../middleware/errorHandler');

const getUsers = (req, res) => {
  const users = UserModel.getAll();
  res.status(200).json({ success: true, count: users.length, data: users });
};

const getUser = (req, res, next) => {
  const id = Number(req.params.id); // req.params -> values from the URL, e.g. /users/1
  const user = UserModel.getById(id);
  if (!user) return next(new AppError(`User with id ${id} not found`, 404));
  res.status(200).json({ success: true, data: user });
};

const createUser = (req, res) => {
  const user = UserModel.create(req.body); // req.body -> parsed JSON from the client
  res.status(201).json({ success: true, data: user }); // 201 = Created
};

const updateUser = (req, res, next) => {
  const id = Number(req.params.id);
  const user = UserModel.update(id, req.body);
  if (!user) return next(new AppError(`User with id ${id} not found`, 404));
  res.status(200).json({ success: true, data: user });
};

const deleteUser = (req, res, next) => {
  const id = Number(req.params.id);
  const deleted = UserModel.remove(id);
  if (!deleted) return next(new AppError(`User with id ${id} not found`, 404));
  res.status(204).send(); // 204 = No Content
};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
