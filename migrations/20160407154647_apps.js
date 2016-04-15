exports.up = function (knex, Promise) {
  return knex.schema
    .createTable('app', function (table) {
      table.string('id', 30).primary()
      table.string('name', 40).notNullable()
      table.timestamp('creation')
        .notNullable()
        .defaultTo(knex.fn.now())
    })
    .createTable('company_app', function (table) {
      table.uuid('id').primary()

      table.string('app', 30)
        .references('id')
        .inTable('app')
        .onDelete('cascade')
        .onUpdate('restrict')
        .notNullable()

      table.uuid('company')
        .references('id')
        .inTable('company')
        .onDelete('restrict')
        .onUpdate('restrict')
        .notNullable()

      table.timestamp('creation')
        .notNullable()
        .defaultTo(knex.fn.now())
    })
    .createTable('company_permission', function (table) {
      table.uuid('id').primary()

      table.uuid('company')
        .references('id')
        .inTable('company')
        .onDelete('restrict')
        .onUpdate('restrict')
        .notNullable()

      table.string('permission', 30)
        .references('id')
        .inTable('permission')
        .onDelete('cascade')
        .onUpdate('restrict')
        .notNullable()

      table.timestamp('creation')
        .notNullable()
        .defaultTo(knex.fn.now())
    })
}

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTable('app')
    .dropTable('company_app')
    .dropTable('company_permission')
}
