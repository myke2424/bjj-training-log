const jwt = require('jsonwebtoken');
const config = require('config');

// Validate JWT - If valid - Give access to API Endpoint
module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access Denied');

  try {
    // if the token is valid - return the decoded payload
    const payload = jwt.verify(token, config.get('jwtPrivateKey'));
    req.user = payload;
    next();
  } catch (ex) {
    return res.status(400).send('Invalid Token');
  }
};
