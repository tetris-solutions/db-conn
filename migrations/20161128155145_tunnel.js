exports.up = function (knex, Promise) {
  return knex.schema.createTable('tunnel', function (table) {
    table.uuid('id').primary()

    table.string('name', 30).notNullable()
    table.string('email', 50).notNullable()
    table.uuid('company')
      .references('id')
      .inTable('company')
      .onDelete('restrict')
      .onUpdate('restrict')
      .notNullable()

    table.unique(['company', 'email'])

    table.timestamp('creation')
      .notNullable()
      .defaultTo(knex.fn.now())
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('tunnel')
}
