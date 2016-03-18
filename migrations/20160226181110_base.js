exports.up = function (knex, Promise) {
  return knex.schema
    .createTable('user', function (table) {
      table.uuid('id').primary()
      table.string('name', 50).notNullable()
      table.string('password', 60).notNullable()
      table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
    })
    .createTable('user_email', function (table) {
      table.string('id', 50).primary()
      table.timestamp('confirmation').nullable()
      table.uuid('user').references('id')
        .inTable('user')
        .onDelete('cascade')
        .onUpdate('restrict')
        .notNullable()
      table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
    })
}

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTable('user_email')
    .dropTable('user')
}
