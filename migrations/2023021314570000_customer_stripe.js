exports.up = async function (knex) {
    await knex.schema
        .createTable('user_subscription', function (table) {
            table.string('id').primary()
            table.string('subscription_id')
            table.uuid('user')
                .references('id')
                .inTable('user')
                .onDelete('restrict')
                .onUpdate('restrict')
            table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
        })
  }
  
exports.down = async function (knex, Promise) {
    return knex.schema
        .dropTable('user_subscription')
}
  