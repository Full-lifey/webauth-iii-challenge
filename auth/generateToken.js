const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');

module.exports = function(user) {
  const jwtPayload = {
    subject: user.id,
    username: user.username,
    department: user.department
  };
  const jwtOptions = {
    expiresIn: '1d'
  };
  return jwt.sign(jwtPayload, secrets.jwtSecret, jwtOptions);
};
