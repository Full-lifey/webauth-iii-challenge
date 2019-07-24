const express = require('express');
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');
const authenticate = require('../auth/auth-middleware.js');
const generateToken = require('./generateToken.js');

const router = express.Router();

router.post('/register', (req, res) => {
  console.log('req.body', req.body);
  let user = req.body;
  const hashPw = bcrypt.hashSync(user.password, 8);
  user.password = hashPw;

  Users.add(user)
    .then(createdUser => {
      res.json(createdUser);
    })
    .catch(err => {
      res.status(500).json({ message: 'Unable to create user' });
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy(username)
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ message: `Welcome ${username}`, token });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'server problem, unable to login' });
    });
});

module.exports = router;
