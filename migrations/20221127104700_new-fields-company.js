exports.up = async function (knex) {
    await knex.schema
        .alterTable('company', function (table) {
            table.string('locale').notNullable().defaultTo('pt-BR')
            table.string('currency_write').notNullable().defaultTo('BRL')
            table.string('currency_read').notNullable().defaultTo('BRL')
        })
  }
  
exports.down = async function (knex, Promise) {
    await knex.schema
        .alterTable('company', function (table) {
            table.dropColumn('locale')
            table.dropColumn('currency_write')
            table.dropColumn('currency_read')
        })
}
  