exports.up = async function (knex) {
    await knex.schema
        .alterTable('user', function (table) {
            table.string('customer_id')
        })
  }
  
exports.down = async function (knex, Promise) {
    await knex.schema
        .alterTable('user', function (table) {
            table.dropColumn('customer_id')
        })
}
  