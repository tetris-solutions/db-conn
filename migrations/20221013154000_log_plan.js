exports.up = async function (knex) {
    await knex.schema
        .createTable('plan_control', function (table) {
            table.uuid('id').primary()
            table.uuid('plan')
                .references('id')
                .inTable('plan')
                .onDelete('restrict')
                .onUpdate('restrict')
                .notNullable()
            table.string('permission')
                .references('id')
                .inTable('permission')
                .onDelete('restrict')
                .onUpdate('restrict')
                .notNullable()
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
            table.integer('count').notNullable().defaultTo(0)
            table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
        })
  }
  
  exports.down = function (knex, Promise) {
    return knex.schema
        .dropTable('plan_control')
  }
  