exports.up = function (knex, Promise) {
  return knex.schema
    .table('role', function (table) {
      table.boolean('dash_sync')
        .notNullable()
        .defaultTo(false)
    })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('role', function (table) {
    table.dropColumn('dash_sync')
  })
}
