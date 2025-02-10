exports.up = async function (knex) {
    await knex.schema
        .alterTable('platform', function (table) {
            table.jsonb('tags')
        })
  }
  
exports.down = async function (knex, Promise) {
    await knex.schema
        .alterTable('platform', function (table) {
            table.dropColumn('tags')
        })
}
  