const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const routes = require('./routes');
const { notFound, errorHandler } = require('./middleware/errorHandler');
const requestLogger = require('./middleware/logger');

const app = express();

// ---- Security & utility middleware (run on every request) ----
app.use(helmet());               // sets safe HTTP headers
app.use(cors());                 // allows cross-origin requests
app.use(morgan('dev'));          // logs each request to the console

// ---- Body parsers (built-in middleware) ----
app.use(express.json());                         // parses JSON bodies
app.use(express.urlencoded({ extended: true }));  // parses form bodies

// ---- Custom middleware ----
app.use(requestLogger);

// ---- Routes ----
app.use('/api', routes);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Express Learning API' });
});

// ---- 404 handler (runs if no route matched above) ----
app.use(notFound);

// ---- Central error handler (must be defined LAST) ----
app.use(errorHandler);

module.exports = app;
