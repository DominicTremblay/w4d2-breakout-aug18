const config = require("./knexfile.js");
const env = "development";
const knex = require("knex")(config[env]);

knex
  .select("first_name", "last_name", "email", "game", "game_played")
  .from("players")
  .innerJoin("game_details", "players.id", "game_details.player_id")
  .innerJoin("games", "game_details.player_id", "games.id")
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log("Error: ", error);
  })
  .finally(() => {
    console.log("Query done!");
    knex.destroy();
  });
