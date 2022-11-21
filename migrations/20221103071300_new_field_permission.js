exports.up = async function (knex) {
    await knex.schema
        .alterTable('permission', function (table) {
            table.boolean('is_role').notNullable().defaultTo(false)
        })
  }
  
exports.down = async function (knex, Promise) {
    await knex.schema
        .alterTable('permission', function (table) {
            table.dropColumn('is_role')
        })
}
  