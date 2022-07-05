exports.seed = function (knex, Promise) {
  return Promise.join(
    knex('platform').del(),

    // Inserts seed entries
    knex('platform').insert({id: 'facebook', name: 'Facebook'}),
    knex('platform').insert({id: 'adwords', name: 'Google AdWords'}),
    knex('platform').insert({id: 'analytics', name: 'Google Analytics'}),
    knex('platform').insert({id: 'doubleclick', name: 'Double Click'}),
    knex('platform').insert({id: 'twitter', name: 'Twitter'}),
    knex('platform').insert({id: 'vtex', name: 'VTEX'}),
    knex('platform').insert({id: 'linkedin', name: 'LinkedIn'}),
    knex('platform').insert({id: 'microsoft', name: 'Microsoft'}),
    knex('platform').insert({id: 'criteo', name: 'Criteo'}),
    knex('platform').insert({id: 'youtube', name: 'Youtube'}),
    knex('platform').insert({id: 'linx', name: 'Linx'}),
    knex('platform').insert({id: 'taboola', name: 'Taboola'}),
    knex('platform').insert({id: 'amazon', name: 'Amazon Ads'}),
    knex('platform').insert({id: 'salesforce', name: 'Salesforce'}),
    knex('platform').insert({id: 'pipedrive', name: 'Pipedrive'}),
    knex('platform').insert({id: 'rdstation', name: 'RD Station'})
  )
}
