exports.up = async function (knex) {
    await knex.schema
        .alterTable('plan_control', function (table) {
            table.dropForeign('plan')
            table.dropColumn('plan')
        })
  }
  
  exports.down = function (knex, Promise) {

  }
  