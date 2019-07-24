exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl
      .string('username', 64)
      .notNullable()
      .unique();
    tbl.string('password', 128).notNullable();
    tbl.string('department', 64);
  });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists('users');
};
