exports.up = function (knex, Promise) {
    return knex.schema.table('invite', function (table) {
        table
            .uuid('role')
            .nullable()
            .alter()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.table('invite', function (table) {
        table
            .uuid('role')
            .notNullable()
            .alter()
    })
}
