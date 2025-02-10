exports.up = async function (knex) {
    await knex.schema
        .alterTable('plan', function (table) {
            table.string('subplan_type_defaults').notNullable().defaultTo('')
        })
  }
  
exports.down = async function (knex, Promise) {
    await knex.schema
        .alterTable('plan', function (table) {
            table.dropColumn('subplan_type_defaults')
        })
}
  