const express = require('express');
const users = require('../routes/users');
const workouts = require('../routes/workouts');

module.exports = function (app) {
  // Parse incoming JSON request
  app.use(express.json());

  app.use('/api/users', users);
  app.use('/api/workouts', workouts);
};
