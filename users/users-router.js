const router = require('express').Router();

const auth = require('../auth/auth-middleware.js');
const Users = require('../users/users-model');

router.get('/', (req, res) => {
  console.log(req.headers.authorization);
  const department = req.headers.authorization;

  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ message: '' });
    });
});

module.exports = router;
