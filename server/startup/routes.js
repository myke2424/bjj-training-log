const express = require('express');
const auth = require('../routes/auth');
const users = require('../routes/users');
const workouts = require('../routes/workouts');
const cors = require('../middleware/cors');
// const session = require('express-session');
// // const redisStore = require('connect-redis')(session);
// // const redis = require('redis');
// // const redisClient = redis.createClient();

module.exports = function (app) {
  app.use(express.json());
  app.use(cors);
  // app.use(
  //   session({
  //     secret: 'testSession',
  //     store: new redisStore({
  //       host: '127.0.0.1',
  //       port: 6379,
  //       client: redisClient,
  //       ttl: 260,
  //     }),
  //     saveUninitialized: false,
  //     resave: false,
  //   })
  // );

  app.use('/api/users', users);
  app.use('/api/workouts', workouts);
  app.use('/api/auth', auth);
};
