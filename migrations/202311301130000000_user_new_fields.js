exports.up = async function (knex) {
    await knex.schema
        .alterTable('user', function (table) {
            table.string('price_pre_chosen')
        })
  }
  
exports.down = async function (knex, Promise) {
    await knex.schema
        .alterTable('user', function (table) {
            table.dropColumn('price_pre_chosen')
        })
}
  