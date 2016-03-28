exports.up = function (knex, Promise) {
  return knex.schema
    .table('account', function (table) {
      table.unique(['platform', 'external_id'])
      table.jsonb('token')
      table.timestamp('token_timestamp')
      table.timestamp('token_expiration')
    })
    .createTable('user_account', function (table) {
      table.uuid('id').primary()

      table.uuid('account')
        .references('id')
        .inTable('account')
        .onDelete('cascade')
        .onUpdate('restrict')
        .notNullable()

      table.uuid('user')
        .references('id')
        .inTable('user')
        .onDelete('cascade')
        .onUpdate('restrict')
        .notNullable()

      table.unique(['account', 'user'])

      table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
    })
}

exports.down = function (knex, Promise) {
  return knex.schema
    .table('account', function (table) {
      table.dropIndex(['platform', 'external_id'])
      table.dropColumn('token')
      table.dropColumn('token_timestamp')
      table.dropColumn('token_expiration')
    })
    .dropTable('user_account')
}
