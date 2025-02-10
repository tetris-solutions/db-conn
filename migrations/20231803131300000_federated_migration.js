exports.up = async function (knex) {
    await knex.schema
        .createTable('federated_migration', function (table) {
            table.string('id').primary()
            table.uuid('user')
                .references('id')
                .inTable('user')
                .onDelete('restrict')
                .onUpdate('restrict')
            table.string('platform')
                .references('id')
                .inTable('platform')
                .defaultTo('email')
            table.uuid('company')
                .references('id')
                .inTable('company')
                .onDelete('restrict')
                .onUpdate('restrict')
            table.boolean('is_executed').defaultTo(false)
            table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
        })
  }
  
exports.down = async function (knex, Promise) {
    return knex.schema
        .dropTable('federated_migration')
}
  