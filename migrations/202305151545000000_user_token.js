exports.up = async function (knex) {
    await knex.schema
        .createTable('user_token', function (table) {
            table.uuid('id').primary()
            table.uuid('user')
                .references('id')
                .inTable('user')
                .onDelete('restrict')
                .onUpdate('restrict')
            table.uuid('token_id')
                .references('id')
                .inTable('token')
                .onDelete('restrict')
                .onUpdate('restrict')
            table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
        })

  }
  
exports.down = async function (knex, Promise) {
    return knex.schema
        .dropTable('user_token')
}
  