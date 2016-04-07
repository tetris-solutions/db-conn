exports.up = function (knex, Promise) {
  knex.schema
    .table('permission', function (table) {
      table.string('app', 20)
        .references('id')
        .inTable('app')
        .onDelete('cascade')
        .onUpdate('restrict')

      table.dropColumn('scope')
    })
    .dropTable('scope')
}

exports.down = function (knex, Promise) {
  // sorry, not sorry
}
