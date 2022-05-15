exports.up = function (knex, Promise) {
    return knex.schema.table('account', function (table) {
        table.string('name', 100)
        table.string('description', 500)
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.table('account', function (table) {
        table.dropColumn('name')
        table.dropColumn('description')
    })
}
