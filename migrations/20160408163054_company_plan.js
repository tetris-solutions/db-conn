exports.up = function (knex, Promise) {
  return knex.schema
    .dropTable('company_permission')
    .createTable('company_plan', function (table) {
      table.uuid('id').primary()

      table.uuid('company')
        .references('id')
        .inTable('company')
        .onDelete('cascade')
        .onUpdate('restrict')
        .notNullable()

      table.uuid('plan')
        .references('id')
        .inTable('plan')
        .onDelete('cascade')
        .onUpdate('restrict')
        .notNullable()

      table.timestamp('creation')
        .notNullable()
        .defaultTo(knex.fn.now())

      table.timestamp('expiration').notNullable()
    })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('company_plan')
}
