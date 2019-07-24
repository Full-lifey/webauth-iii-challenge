const jwt = require('jsonwebtoken');
const jwtSecret = require('../config/secrets.js');

module.exports = function(user) {
  const jwtPayload = {
    subject: user.id,
    username: user.username,
    department: user.department
  };
  const jwtOptions = {
    expiresIn: '1d'
  };
  return jwt.sign(jwtPayload, jwtSecret, jwtOptions);
};
