exports.up = async function (knex) {
    await knex.schema
        .alterTable('invite', function (table) {
            table.uuid('plan')
                .references('id')
                .inTable('plan')
                .onDelete('cascade')
                .onUpdate('restrict')
        })
  }
  
exports.down = async function (knex, Promise) {
    await knex.schema
        .alterTable('invite', function (table) {
            table.dropColumn('plan')
        })
}
  