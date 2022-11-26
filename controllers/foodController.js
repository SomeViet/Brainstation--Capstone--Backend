const knex = require("knex")(require("../knexfile").development);

exports.index = (_req, res) => {
    knex("food")
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((e) => res.status(400).send(`Error Retriving Food Data: ${e}`));
};
