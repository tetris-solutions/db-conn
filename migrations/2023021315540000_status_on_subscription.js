exports.up = async function (knex) {
    await knex.schema
        .alterTable('user_subscription', function (table) {
            table.string('status')
        })
  }
  
exports.down = async function (knex, Promise) {
    await knex.schema
        .alterTable('user_subscription', function (table) {
            table.dropColumn('status')
        })
}
  