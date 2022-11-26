const cuisineData = require("../seed_data/cuisine");

exports.seed = function (knex) {
    return knex("cuisine")
        .del()
        .then(function () {
            return knex("cuisine").insert(cuisineData);
        });
};
