exports.seed = function (knex, Promise) {
  return Promise.join(
    knex('platform').del(),

    // Inserts seed entries
    knex('platform').insert({id: 'facebook', name: 'Facebook'}),
    knex('platform').insert({id: 'adwords', name: 'Google AdWords'})
  )
}
