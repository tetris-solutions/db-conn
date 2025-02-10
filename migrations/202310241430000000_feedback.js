exports.up = async function (knex) {
    await knex.schema
        .createTable('origin_feedback', function (table) {
            table.uuid('id').primary()
            table.string('description')
            table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
        })
    await knex.schema
        .createTable('feedback', function (table) {
            table.uuid('id').primary()
            table.string('comentary')
            table.string

            table.uuid('user')
                .references('id')
                .inTable('user')
                .notNullable()

            table.uuid('origin')
                .references('id')
                .inTable('origin_feedback')
                .notNullable()
            table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
        })


  }
  
exports.down = async function (knex, Promise) {
    return knex.schema
        .dropTable('downgrade_schedule_workspaces')
}
  