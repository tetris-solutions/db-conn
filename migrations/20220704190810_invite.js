exports.up = function (knex, Promise) {
    return knex.schema.table('invite', function (table) {
        table
            .string('platform')
            .references('id')
            .inTable('federated_platform')
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.table('company', function (table) {
        table.dropColumn('platform')
    })
}
