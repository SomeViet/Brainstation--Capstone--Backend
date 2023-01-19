/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable("cuisine", (table) => {
            table.increments("id").primary();
            table.string("cuisine").notNullable();
            table.timestamp("updated_at").defaultTo(knex.fn.now());
        })
        .createTable("food", (table) => {
            table.increments("id").primary();
            table.string("food").notNullable();
            table
                .integer("cuisine_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("cuisine")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.timestamp("updated_at").defaultTo(knex.fn.now());
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("cuisine").dropTable("food");
};
