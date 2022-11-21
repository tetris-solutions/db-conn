exports.up = async function (knex) {
    await knex.schema
        .alterTable('company', function (table) {
            table.boolean('is_qa').notNullable().defaultTo(false)
        })
  }
  
exports.down = async function (knex, Promise) {
    await knex.schema
        .alterTable('company', function (table) {
            table.dropColumn('is_qa')
        })
}
  