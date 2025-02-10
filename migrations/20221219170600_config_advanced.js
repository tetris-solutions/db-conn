exports.up = async function (knex) {
    await knex.schema
        .alterTable('company', function (table) {
            table.jsonb('config_advanced')
        })
  }
  
exports.down = async function (knex, Promise) {
    await knex.schema
        .alterTable('company', function (table) {
            table.dropColumn('config_advanced')
        })
}
  