const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');

router.use('/users', userRoutes); // mounts all user routes under /api/users

module.exports = router;
