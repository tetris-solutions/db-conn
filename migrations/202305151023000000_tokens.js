exports.up = async function (knex) {
    await knex.schema
        .createTable('token', function (table) {
            table.string('id').primary()
            table.string('name')
            table.string('token')
            table.boolean('is_active').defaultTo(true).notNullable()
            table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
            table.timestamp('expiration')
        })
        .createTable('user_token', function (table) {
            table.string('id').primary()
            table.uuid('user')
                .references('id')
                .inTable('user')
                .onDelete('restrict')
                .onUpdate('restrict')
            table.uuid('token')
                .references('id')
                .inTable('token')
                .onDelete('restrict')
                .onUpdate('restrict')
            table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
        })

  }
  
exports.down = async function (knex, Promise) {
    return knex.schema
        .dropTable('token')
        .dropTable('user_token')
}
exports.up = async function (knex) {
    await knex.schema
        .createTable('token', function (table) {
            table.uuid('id').primary()
            table.string('name')
            table.string('token')
            table.boolean('is_active').defaultTo(true).notNullable()
            table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
            table.timestamp('expiration')
        })

  }
  
exports.down = async function (knex, Promise) {
    return knex.schema
        .dropTable('token')
}
   