const { AppError } = require('./errorHandler');

// Validates the request body BEFORE it reaches the controller.
const validateUser = (req, res, next) => {
  const { name, email, age } = req.body;
  const errors = [];

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.push('Name is required and must be at least 2 characters');
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('A valid email is required');
  }
  if (age !== undefined && (typeof age !== 'number' || age < 0)) {
    errors.push('Age must be a positive number');
  }

  if (errors.length > 0) {
    return next(new AppError(errors.join(', '), 400)); // 400 = Bad Request
  }

  next(); // validation passed, move on to the controller
};

module.exports = { validateUser };
