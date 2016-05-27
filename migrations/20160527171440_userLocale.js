exports.up = function (knex, Promise) {
  return knex.schema.table('user', function (table) {
    table.string('locale', 5)
      .references('id')
      .inTable('locale')
      .onDelete('cascade')
      .onUpdate('restrict')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('user', function (table) {
    table.dropColumn('locale')
  })
}
