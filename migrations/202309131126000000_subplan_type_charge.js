exports.up = async function (knex) {
    await knex.schema
        .alterTable('subplan', function (table) {
            table.string('type_charge')
        })

  }
  
exports.down = async function (knex, Promise) {
    await knex.schema
        .alterTable('subplan', function (table) {
            table.dropColumn('type_charge')
        })
}
  