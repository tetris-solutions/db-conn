exports.up = async function (knex) {
    await knex.schema
        .alterTable('plan', function (table) {
            table.integer('weight').notNullable().defaultTo(0)
        })
  }
  
exports.down = async function (knex, Promise) {
    await knex.schema
        .alterTable('plan', function (table) {
            table.dropColumn('weight')
        })
}
  