exports.up = async function (knex) {
    await knex.schema
        .alterTable('temp_subscription', function (table) {
            table.string('user')
        })

  }
  
exports.down = async function (knex, Promise) {
    await knex.schema
        .alterTable('temp_subscription', function (table) {
            table.dropColumn('user')
        })
}
  