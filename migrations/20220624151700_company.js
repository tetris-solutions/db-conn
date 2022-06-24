exports.up = function (knex, Promise) {
    return knex.schema.table('company', function (table) {
        table
            .string('status_instance')
            .notNullable()
            .defaultTo('registered')
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.table('company', function (table) {
        table.dropColumn('status_instance')
    })
}
