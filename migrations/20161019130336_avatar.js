exports.up = function (knex, Promise) {
  return knex.schema
    .table('user', function (table) {
      table.string('avatar', 200)
    })
    .table('company', function (table) {
      table.string('icon', 200)
    })
}

exports.down = function (knex, Promise) {
  return knex.schema
    .table('user', function (table) {
      table.dropColumn('avatar')
    })
    .table('company', function (table) {
      table.dropColumn('icon')
    })
}
