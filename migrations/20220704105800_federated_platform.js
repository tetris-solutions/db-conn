exports.up = function (knex, Promise) {
    return knex.schema
      .createTable('federated_platform', function (table) {
        table.string('id').notNullable()
        table.string('name').notNullable()
      })
      .alterTable('federated_credentials', function (table) {
        table.string('provider')
          .notNullable()
          .references('id')
          .inTable('federated_platform')
          .onDelete('restrict')
          .onUpdate('restrict')
          .alter()
      })
  }
  
  exports.down = function (knex, Promise) {
    return knex.schema
    .dropTable('federated_platform')

  }
  