exports.up = async function (knex) {
    await knex('platform').insert({ creation: knex.fn.now(), id: 'facebook', name: 'Facebook'})
    await knex('platform').insert({ creation: knex.fn.now(), id: 'microsoft', name: 'Microsoft'})
    await knex('platform').insert({ creation: knex.fn.now(), id: 'amazon', name: 'Amazon'})
    await knex('platform').insert({ creation: knex.fn.now(), id: 'adwords', name: 'Adwords'})
    await knex('platform').insert({ creation: knex.fn.now(), id: 'twitter', name: 'Twitter'})
    await knex('platform').insert({ creation: knex.fn.now(), id: 'analytics', name: 'Analytics'})
    await knex('platform').insert({ creation: knex.fn.now(), id: 'doubleclick', name: 'DoubleClick'})
    await knex('platform').insert({ creation: knex.fn.now(), id: 'vtex', name: 'Vtex'})
    await knex('platform').insert({ creation: knex.fn.now(), id: 'criteo', name: 'Criteo'})
    await knex('platform').insert({ creation: knex.fn.now(), id: 'youtube', name: 'Youtube'})
    await knex('platform').insert({ creation: knex.fn.now(), id: 'linx', name: 'Linx'})
    await knex('platform').insert({ creation: knex.fn.now(), id: 'taboola', name: 'Taboola'})
    await knex('platform').insert({ creation: knex.fn.now(), id: 'salesforce', name: 'Salesforce'})
    await knex('platform').insert({ creation: knex.fn.now(), id: 'pipedrive', name: 'Pipedrive'})
    await knex('platform').insert({ creation: knex.fn.now(), id: 'rdstation', name: 'RD Station'})
    await knex('platform').insert({ creation: knex.fn.now(), id: 'linkedin', name: 'LinkedIn'})
  }
  
  exports.down = function (knex, Promise) {

  }
  