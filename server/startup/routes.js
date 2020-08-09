const express = require('express');
const auth = require('../routes/auth');
const users = require('../routes/users');
const workouts = require('../routes/workouts');

module.exports = function (app) {
  // Parse incoming JSON request
  app.use(express.json());

  // allows cors
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  app.use('/api/users', users);
  app.use('/api/workouts', workouts);
  app.use('/api/auth', auth);
};
