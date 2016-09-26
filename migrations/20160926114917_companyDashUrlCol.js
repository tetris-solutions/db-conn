exports.up = function (knex, Promise) {
  return knex.schema.table('company', function (table) {
    table.string('legacy_dash_url', 255)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('company', function (table) {
    table.dropColumn('legacy_dash_url')
  })
}
