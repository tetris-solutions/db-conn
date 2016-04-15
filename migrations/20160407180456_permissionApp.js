exports.up = function (knex, Promise) {
  return knex.schema
    .table('permission', function (table) {
      table.string('app', 30)
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
  console.error('Sorry fam.')
  process.exit(1)
}
