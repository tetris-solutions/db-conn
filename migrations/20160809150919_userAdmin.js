exports.up = function (knex, Promise) {
  return knex.schema
    .table('user', function (table) {
      table.boolean('is_admin')
        .notNullable()
        .defaultTo(false)
    })
}

exports.down = function (knex, Promise) {

}
