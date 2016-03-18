exports.up = function (knex, Promise) {
  return knex.schema
    .createTable('platform')
    .createTable('company_account')
    .createTable('company_account_adwords')
}

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTable('platform')
    .dropTable('company_account')
    .dropTable('company_account_adwords')
}
