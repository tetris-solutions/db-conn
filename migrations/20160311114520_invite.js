exports.up = function (knex, Promise) {
  return knex.schema
    .createTable('invite', function (table) {
      table.uuid('id').primary()

      table.string('email', 50).notNullable()

      table.uuid('role')
        .references('id')
        .inTable('role')
        .onDelete('cascade')
        .onUpdate('restrict')
        .notNullable()

      table.uuid('inviter')
        .references('id')
        .inTable('user')
        .onDelete('set null')
        .onUpdate('restrict')
        .notNullable()

      table.timestamp('creation')
        .notNullable()
        .defaultTo(knex.fn.now())

      table.index(['email'])
      table.unique(['email', 'role'])
    })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('invite')
}
