exports.up = async function (knex) {
    await knex.schema
        .alterTable('subplan_permission', function (table) {
            table.string('scope').notNullable().defaultTo('global')
            table.integer('count_enabled').notNullable().defaultTo(0)
        })
  }
  
exports.down = async function (knex, Promise) {
    await knex.schema
        .alterTable('subplan_permission', function (table) {
            table.dropColumn('scope')
            table.dropColumn('count_enabled')
        })
}
  