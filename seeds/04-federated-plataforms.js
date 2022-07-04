exports.seed = function (knex, Promise) {
    return Promise.join(
      knex('federated_platform').del(),
  
      // Inserts seed entries
      knex('federated_platform').insert({id: 'facebook', name: 'Facebook'}),
      knex('federated_platform').insert({id: 'google', name: 'Google'}),
      knex('federated_platform').insert({id: 'microsoft', name: 'Microsoft'}),
      knex('federated_platform').insert({id: 'amazon', name: 'Amazon'})
    )
  }
  