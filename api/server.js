const express = require('express');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');

const server = express();

server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
  return res.json({ message: 'server is running' });
});

module.exports = server;
