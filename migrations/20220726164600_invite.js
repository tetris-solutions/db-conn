exports.up = function (knex, Promise) {
    return knex.schema.table('invite', function (table) {
        table
            .uuid('inviter')
            .nullable()
            .alter()
        table.string('origin')
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.table('invite', function (table) {
        table
            .uuid('inviter')
            .notNullable()
            .alter()
        table.dropColumn('origin')
    })
}
