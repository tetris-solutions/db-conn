exports.up = async function (knex) {
    await knex.schema
        .alterTable('plan_subplan', function (table) {
            table.integer('weight').notNullable().defaultTo(0)
        })
  }
  
exports.down = async function (knex, Promise) {
    await knex.schema
        .alterTable('plan_subplan', function (table) {
            table.dropColumn('weight')
        })
}
  