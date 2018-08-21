exports.up = function(knex, Promise) {
  return knex.schema.createTable("game_details", table => {
    table.increments("id");
    table.integer("game_id");
    table.integer("player_id");

    table
      .foreign("player_id")
      .references("id")
      .on("players")
      .onDelete("cascade");

    table
      .foreign("game_id")
      .references("id")
      .on("games")
      .onDelete("cascade");
  });
  table.timestamps();
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("game_details");
};
