exports.up = function (knex, Promise) {
  return knex.schema
    .createTable('scope', function (table) {
      table.string('id', 20).primary()

      table.string('name', 30)
        .notNullable()

      table.timestamp('creation')
        .notNullable()
        .defaultTo(knex.fn.now())
    })
    .table('permission', function (table) {
      table.string('scope', 20)
        .references('id')
        .inTable('scope')
        .onDelete('restrict')
        .onUpdate('restrict')
        .notNullable()
    })
}

exports.down = function (knex, Promise) {
  return knex.schema
    .table('permission', function (table) {
      table.dropColumn('scope')
    })
    .dropTable('scope')
}
