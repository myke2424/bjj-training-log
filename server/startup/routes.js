const express = require('express');
const users = require('../routes/users');

module.exports = function (app) {
  // Parse incoming JSON request
  app.use(express.json());

  app.use('/api/users', users);
};
