exports.up = async function (knex) {
    await knex.schema
        .createTable('plan_user', function (table) {
            table.uuid('id').primary()
            table.uuid('plan')
                .references('id')
                .inTable('plan')
                .onDelete('restrict')
                .onUpdate('restrict')
                .notNullable()
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
        .dropTable('plan_user')
  }
  