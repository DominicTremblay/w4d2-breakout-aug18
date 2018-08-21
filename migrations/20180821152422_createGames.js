exports.up = function(knex, Promise) {
  return knex.schema.createTable("games", table => {
    table.increments("id");
    table.string("game");
    table.date("game_played");
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("games");
};
