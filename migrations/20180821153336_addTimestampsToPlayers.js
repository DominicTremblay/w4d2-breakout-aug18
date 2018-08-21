exports.up = function(knex, Promise) {
  return knex.schema.table("players", table => {
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropColumn("created_at");
  return knex.schema.dropColumn("updated_at");
};
