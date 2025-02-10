exports.up = async function (knex) {
    await knex.schema
        .createTable('downgrade_schedule', function (table) {
            table.uuid('id').primary()

            table.uuid('plan')
                .references('id')
                .inTable('plan')
                .notNullable()
            table.timestamp('executed')
            table.timestamp('scheduled').notNullable()
            table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
        })

    await knex.schema
        .createTable('downgrade_schedule_workspaces', function (table) {
            table.uuid('id').primary()

            table.uuid('company')
                .references('id')
                .inTable('company')
                .notNullable()

            table.uuid('downgrade_schedule')
                .references('id')
                .inTable('downgrade_schedule')
                .notNullable()
            
            table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
        })
  }
  
exports.down = async function (knex, Promise) {
    return knex.schema
        .dropTable('downgrade_schedule_workspaces')
        .dropTable('downgrade_schedule')
}
  