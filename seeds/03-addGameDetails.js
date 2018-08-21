const faker = require("faker");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex.raw("ALTER SEQUENCE game_details_id_seq RESTART WITH 1"),
    knex("game_details")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("game_details").insert([
          {
            player_id: faker.random.number({ min: 1, max: 5 }),
            game_id: faker.random.number({ min: 1, max: 5 })
          },
          {
            player_id: faker.random.number({ min: 1, max: 5 }),
            game_id: faker.random.number({ min: 1, max: 5 })
          },
          {
            player_id: faker.random.number({ min: 1, max: 5 }),
            game_id: faker.random.number({ min: 1, max: 5 })
          },
          {
            player_id: faker.random.number({ min: 1, max: 5 }),
            game_id: faker.random.number({ min: 1, max: 5 })
          },
          {
            player_id: faker.random.number({ min: 1, max: 5 }),
            game_id: faker.random.number({ min: 1, max: 5 })
          }
        ]);
      })
  ]);
};
