const express = require('express');
const app = express();
const port = process.env.port || 8080;

require('./startup/routes')(app);
require('./startup/db')(); // Initalize DB Connection

const server = app.listen(port, () =>
  console.log(`Server running on port ${port}`)
);

module.exports = server;
