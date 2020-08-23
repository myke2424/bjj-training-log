const session = require('express-session');

module.exports = function (req, res, next) {
  session({
    secret: 'testSession',
    saveUninitialized: false,
    resave: false,
  });
  next();
};
