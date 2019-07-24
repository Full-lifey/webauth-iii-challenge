const express = require('express');

const server = express();

// server.use('/api', userRouter)

server.get('/', (req, res) => {
  return res.json({ message: 'server is running' });
});

module.exports = server;
