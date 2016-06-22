exports.up = function (knex, Promise) {
  return knex.schema
    .table('company', function (table) {
      table.string('timezone', 200)
        .defaultTo('America/Sao_Paulo')
        .notNullable()
    })
}

exports.down = function (knex, Promise) {
  return knex.schema
    .table('company', function (table) {
      table.dropColumn('timezone')
    })
}
