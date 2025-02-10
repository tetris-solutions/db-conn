exports.up = async function (knex) {
    await knex.schema
        .alterTable('downgrade_schedule', function (table) {
            table.timestamp('canceled')
        })

  }
  
exports.down = async function (knex, Promise) {
    await knex.schema
        .alterTable('downgrade_schedule', function (table) {
            table.dropColumn('canceled')
        })
}
  