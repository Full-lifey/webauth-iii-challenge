const knex = require('knex');

const db = require('../database/db-config.js');

module.exports = {
  find
};

function find() {
  return db('users').select('id', 'username', 'password');
}
