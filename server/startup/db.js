const mongoose = require('mongoose');

module.exports = function () {
  mongoose
    .connect('mongodb://localhost/bjj_log', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Successfully connected to bjj log DB...'))
    .catch((err) => console.log('Couldnt connect to DB...', err));
};
