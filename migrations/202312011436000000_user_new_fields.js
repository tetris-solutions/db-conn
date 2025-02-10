exports.up = async function (knex) {
    await knex.schema
        .alterTable('user', function (table) {
            table.jsonb('parameters_tracking')
        })
  }
  
exports.down = async function (knex, Promise) {
    await knex.schema
        .alterTable('user', function (table) {
            table.dropColumn('parameters_tracking')
        })
}
  