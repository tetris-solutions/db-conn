exports.up = async function (knex) {
    await knex.schema
        .alterTable('downgrade_schedule', function (table) {
            table.uuid('user')
                .references('id')
                .inTable('user')
                .notNullable()
        })

  }
  
exports.down = async function (knex, Promise) {
    await knex.schema
        .alterTable('downgrade_schedule', function (table) {
            table.dropColumn('user')
        })
}
  