exports.up = async function (knex) {
    await knex.schema
        .alterTable('plan', function (table) {
            table.boolean('is_signable').defaultTo(false)
        })

        await knex('plan').update({
            is_signable: true,
        })
        .where({
            weight: 2,
            is_dynamic: false
        })

        await knex('plan').update({
            is_signable: true,
        })
        .where({
            weight: 3,
            is_dynamic: false
        })
  
  }
  
exports.down = async function (knex, Promise) {
    await knex.schema
        .alterTable('plan', function (table) {
            table.dropColumn('is_signable')
        })
}
  