const express = require('express');
const cookieParser = require('cookie-parser');
const auth = require('../routes/auth');
const users = require('../routes/users');
const workouts = require('../routes/workouts');
const cors = require('../middleware/cors');
const session = require('../middleware/session');

module.exports = function (app) {
  // Parse incoming JSON request
  app.use(express.json());
  app.use(cors);
  app.use(session);
  app.use(cookieParser());

  app.use('/api/users', users);
  app.use('/api/workouts', workouts);
  app.use('/api/auth', auth);
};
