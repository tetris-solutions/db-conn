exports.up = function (knex, Promise) {
  return knex.schema
    .dropTable('company_app')
    .createTable('plan', function (table) {
      table.uuid('id').primary()
      table.timestamp('creation')
        .notNullable()
        .defaultTo(knex.fn.now())
    })
    .createTable('plan_name', function (table) {
      table.uuid('id').primary()
      table.string('name', 40).notNullable()

      table.uuid('plan')
        .references('id')
        .inTable('plan')
        .onDelete('cascade')
        .onUpdate('restrict')
        .notNullable()

      table.string('locale', 5)
        .references('id')
        .inTable('locale')
        .onDelete('cascade')
        .onUpdate('restrict')
        .notNullable()

      table.timestamp('creation')
        .notNullable()
        .defaultTo(knex.fn.now())
    })
    .createTable('plan_permission', function (table) {
      table.uuid('id').primary()

      table.uuid('plan')
        .references('id')
        .inTable('plan')
        .onDelete('cascade')
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
    .dropTable('plan_permission')
    .dropTable('plan_name')
    .dropTable('plan')
}
