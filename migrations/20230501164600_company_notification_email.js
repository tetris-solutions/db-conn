exports.up = async function (knex) {
    await knex.schema
        .createTable('company_notification_email', function (table) {
            table.string('id').primary()
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
  
exports.down = async function (knex, Promise) {
    return knex.schema
        .dropTable('company_notification_email')
}
  