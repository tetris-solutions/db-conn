exports.up = async function (knex) {
  await knex.schema
      .createTable('parameters', function (table) {
          table.string('id').primary()
          table.string('value')
          table.string('type_value')
          table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
      })

}

exports.down = async function (knex, Promise) {
  return knex.schema
      .dropTable('parameters')
}
