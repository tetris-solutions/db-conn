exports.up = function (knex, Promise) {
    return knex.schema
      .createTable('federated_credentials', function (table) {
        table.uuid('id').primary()
        table.string('provider').notNullable()
        table.string('subject').notNullable()
        table.uuid('owner')
          .references('id')
          .inTable('user')
          .onDelete('restrict')
          .onUpdate('restrict')
        table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
        table.unique(['provider', 'subject'])
      })
  }
  
  exports.down = function (knex, Promise) {
    return knex.schema
    .dropTable('federated_credentials')

  }
  