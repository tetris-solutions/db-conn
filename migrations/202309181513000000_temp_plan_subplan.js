exports.up = async function (knex) {
    await knex.schema
        .createTable('temp_subscription', function (table) {
            table.uuid('id').primary()
            table.string('plan').notNullable()
            table.jsonb('subplans').notNullable()
            table.string('status').notNullable
            table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
        })
  }
  
exports.down = async function (knex, Promise) {
    return knex.schema
        .dropTable('temp_subscription')
}
  