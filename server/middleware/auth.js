const jwt = require('jsonwebtoken');
require('dotenv').config();

// Authorization Middleware
// Validate JWT - If valid - Give access to API Endpoint
module.exports = function (req, res, next) {
  const jwtPrivateKey = process.env.JWT_KEY;
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access Denied. No token provided');

  try {
    // if the token is valid - return the decoded payload - private key is used to decode the jwt
    const payload = jwt.verify(token, jwtPrivateKey);
    req.user = payload; // gives us access to user data (user - id, email, name)
    next();
  } catch (ex) {
    return res.status(400).send('Invalid Token');
  }
};
