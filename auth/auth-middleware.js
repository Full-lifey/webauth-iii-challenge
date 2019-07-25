const jwt = require('jsonwebtoken');
const secret = require('../config/secrets.js');

module.exports = function(req, res, next) {
  const token = req.headers.authentication;

  if (token) {
    jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: 'You shall not pass' });
      } else {
        req.jwtToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ message: 'no token provided' });
  }
};
