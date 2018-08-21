exports.up = function(knex, Promise) {
  return knex.schema.createTable("players", table => {
    table.increments("id");
    table.string("first_name");
    table.string("last_name");
    table.string("email");
    table.string("password");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("players");
};
