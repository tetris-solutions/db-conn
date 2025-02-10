exports.up = async function (knex) {
    await knex.schema
        .alterTable('federated_credentials', function (table) {
            table.boolean('is_archived').notNullable().defaultTo(false)
        })
  }
  
exports.down = async function (knex, Promise) {
    await knex.schema
        .alterTable('federated_credentials', function (table) {
            table.dropColumn('is_archived')
        })
}
  