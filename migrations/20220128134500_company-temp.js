exports.up = function (knex, Promise) {
    return knex.schema
      .createTable('company_temp', function (table) {
        table.uuid('id').primary()
        table.string('name', 30).index()
        table.string('icon')
        table.string('slug')
        table.string('color', 7)
        table.string('position')
        table.uuid('owner')
          .references('id')
          .inTable('user')
          .onDelete('restrict')
          .onUpdate('restrict')
        table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
      })
      .table('company', function (table) {
        table.string('color', 7)
      })
  }
  
  exports.down = function (knex, Promise) {
    return knex.schema
    .dropTable('company_temp')
    .table('company', function (table) {
        table.dropColumn('color')
    })
  }
  