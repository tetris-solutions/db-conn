exports.up = async function (knex) {
    await knex.schema
        .alterTable('company', function (table) {
            table.boolean('use_airflow').notNullable().defaultTo(false)
        })
  }
  
exports.down = async function (knex, Promise) {
    await knex.schema
        .alterTable('company', function (table) {
            table.dropColumn('use_airflow')
        })
}
  