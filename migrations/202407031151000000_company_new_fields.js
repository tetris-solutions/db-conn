exports.up = async function (knex) {
    await knex.schema
        .alterTable('company', function (table) {
            table.boolean('use_singlestore').defaultTo(true)
            table.string('db_name')
        })
  }
  
exports.down = async function (knex, Promise) {
    await knex.schema
        .alterTable('company', function (table) {
            table.dropColumn('use_singlestore')
            table.dropColumn('db_name')
        })
}
  