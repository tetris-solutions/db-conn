exports.up = async function (knex) {
    await knex.schema
        .alterTable('plan', function (table) {
            table.string('product_id')
        })
  }
  
exports.down = async function (knex, Promise) {
    await knex.schema
        .alterTable('plan', function (table) {
            table.dropColumn('product_id')
        })
}
  