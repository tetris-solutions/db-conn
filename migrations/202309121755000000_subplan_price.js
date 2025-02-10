exports.up = async function (knex) {
    await knex.schema
        .alterTable('subplan', function (table) {
            table.string('price_id')
        })

  }
  
exports.down = async function (knex, Promise) {
    await knex.schema
        .alterTable('subplan', function (table) {
            table.dropColumn('price_id')
        })
}
  