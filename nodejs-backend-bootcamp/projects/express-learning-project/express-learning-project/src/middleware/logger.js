// A simple example of a custom middleware function.
// Every middleware gets (req, res, next) and must call next()
// to pass control to the next middleware/route handler.
const requestLogger = (req, res, next) => {
  const time = new Date().toISOString();
  console.log(`[Custom Logger] ${time} - ${req.method} ${req.originalUrl}`);
  next(); // <-- without this, the request would hang forever
};

module.exports = requestLogger;
