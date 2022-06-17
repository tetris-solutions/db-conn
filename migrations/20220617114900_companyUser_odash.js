exports.up = function (knex, Promise) {
    return knex.schema.table('company_user', function (table) {
        table.string('odash_user')
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.table('company_user', function (table) {
        table.dropColumn('odash_user')
    })
}
