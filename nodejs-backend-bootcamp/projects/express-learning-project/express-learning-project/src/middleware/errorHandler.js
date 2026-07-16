// A custom Error class that carries an HTTP status code with it.
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true; // marks "expected" errors vs. bugs
  }
}

// Runs when a request doesn't match any route -> turns it into a 404 error
const notFound = (req, res, next) => {
  const error = new AppError(`Route not found - ${req.originalUrl}`, 404);
  next(error); // passing an argument to next() skips to the error handler
};

// Express recognizes this as an error handler because it takes 4 args (err, req, res, next)
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
};

module.exports = { AppError, notFound, errorHandler };
