exports.up = async function (knex) {
    await knex.schema
        .createTable('company_config_advanced_version', function (table) {
            table.string('id').primary()
            table.uuid('company')
                .references('id')
                .inTable('company')
                .onDelete('restrict')
                .onUpdate('restrict')
            table.jsonb('config_advanced').notNullable()
            table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
        })
  }
  
exports.down = async function (knex, Promise) {
    return knex.schema
        .dropTable('timezone')
}
  