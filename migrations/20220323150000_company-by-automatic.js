exports.up = function (knex, Promise) {
    return knex.schema.table('company', function (table) {
        table.boolean('by_odash_automatic')
            .notNullable()
            .defaultTo(false)
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.table('company', function (table) {
        table.dropColumn('by_odash_automatic')
    })
}
