const express = require('express');
const app = express();
const port = process.env.port || 3000;

// Initalize DB Connection
require('./startup/db')();

const server = app.listen(port, () =>
  console.log(`Server running on port ${port}`)
);

module.exports = server;
