exports.up = function (knex) {
    return Promise.all([
        knex.schema
        .createTable('federated_platform', function (table) {
            table.string('id').notNullable().primary()
            table.string('name').notNullable()
        }),
        knex('federated_platform').insert({id: 'facebook', name: 'Facebook'}),
        knex('federated_platform').insert({id: 'google', name: 'Google'}),
        knex('federated_platform').insert({id: 'microsoft', name: 'Microsoft'}),
        knex('federated_platform').insert({id: 'amazon', name: 'Amazon'}),
        knex('federated_platform').insert({id: 'email', name: 'E-mail'}),
    ])
  }
  
  exports.down = function (knex, Promise) {
    return knex.schema
    .dropTable('federated_platform')
  }
  