const foodData = require("../seed_data/food");

exports.seed = function (knex) {
    return knex("food")
        .del()
        .then(function () {
            return knex("food").insert(foodData);
        });
};
