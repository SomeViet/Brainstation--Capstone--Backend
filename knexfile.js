// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
        client: "mysql",
        connection: {
            host: "hungry-database-backend.cmtseenrwa8c.us-west-2.rds.amazonaws.com",
            port: "3306",
            user: "root",
            password: "rootroot",
            database: "hungry-database",
            charset: "utf8",
        },
    },
    // staging: {
    //     client: "mysql",
    //     connection: {
    //         host: "hungry-database-backend.cmtseenrwa8c.us-west-2.rds.amazonaws.com",
    //         port: "3306",
    //         user: "root",
    //         password: "rootroot",
    //         database: "hungry-database",
    //         charset: "utf8",
    //     },
    // },
    // production: {
    //     client: "mysql",
    //     connection: {
    //         host: "hungry-database-backend.cmtseenrwa8c.us-west-2.rds.amazonaws.com",
    //         port: "3306",
    //         user: "root",
    //         password: "rootroot",
    //         database: "hungry-database",
    //         charset: "utf8",
    //     },
    // },
};
