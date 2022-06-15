exports.up = function (knex, Promise) {
    return knex.schema
      .createTable('company_user', function (table) {
        table.uuid('id').primary()
        table.uuid('company')
          .references('id')
          .inTable('company')
          .onDelete('restrict')
          .onUpdate('restrict')
        table.uuid('user')
          .references('id')
          .inTable('user')
          .onDelete('restrict')
          .onUpdate('restrict')
        table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
      })
  }
  
  exports.down = function (knex, Promise) {
    return knex.schema
    .dropTable('company_user')

  }
  