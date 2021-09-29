exports.up = function (knex, Promise) {
    return knex.schema.table('company', function (table) {
        table.string('slug', 24)
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.table('company', function (table) {
        table.dropColumn('slug')
    })
}
