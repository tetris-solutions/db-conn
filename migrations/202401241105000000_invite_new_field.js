exports.up = function (knex, Promise) {
    return knex.schema.table('invite', function (table) {
        table
            .integer('days_test')
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.table('invite', function (table) {
        table.dropColumn('days_test')
    })
}
