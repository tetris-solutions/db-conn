exports.up = async function (knex) {
    await knex.schema
        .alterTable('user', function (table) {
            table.boolean('ignore_payments')
        })
  }
  
exports.down = async function (knex, Promise) {
    await knex.schema
        .alterTable('user', function (table) {
            table.dropColumn('ignore_payments')
        })
}
  