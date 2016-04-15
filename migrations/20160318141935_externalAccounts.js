exports.up = function (knex, Promise) {
  return knex.schema
    .createTable('platform', function (table) {
      table.string('id', 30).primary()
      table.string('name', 30).notNullable()
      table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
    })
    .createTable('account', function (table) {
      table.uuid('id').primary()

      table.string('platform', 30)
        .references('id')
        .inTable('platform')
        .onDelete('restrict')
        .onUpdate('restrict')
        .notNullable()


      table.string('external_id', 40).notNullable()

      table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
    })
    .createTable('company_account', function (table) {
      table.uuid('id').primary()

      table.uuid('account')
        .references('id')
        .inTable('account')
        .onDelete('cascade')
        .onUpdate('restrict')
        .notNullable()

      table.uuid('company')
        .references('id')
        .inTable('company')
        .onDelete('cascade')
        .onUpdate('restrict')
        .notNullable()

      table.unique(['account', 'company'])

      table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
    })
}

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTable('platform')
    .dropTable('account')
    .dropTable('company_account')
}
