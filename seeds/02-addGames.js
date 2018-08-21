const faker = require("faker");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex.raw("ALTER SEQUENCE games_id_seq RESTART WITH 1"),

    knex("games")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("games").insert([
          { game: faker.hacker.noun(), game_played: faker.date.past() },
          { game: faker.hacker.noun(), game_played: faker.date.past() },
          { game: faker.hacker.noun(), game_played: faker.date.past() },
          { game: faker.hacker.noun(), game_played: faker.date.past() },
          { game: faker.hacker.noun(), game_played: faker.date.past() }
        ]);
      })
  ]);
};
