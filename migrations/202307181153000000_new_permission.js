var uuid = require('uuid').v4

exports.up = async function (knex) {
    await knex('permission').insert({id: 'Support', creation: knex.fn.now()})
    await knex('permission_name').insert({permission: 'Support', creation: knex.fn.now(), locale: 'pt-BR', id: uuid(), name: 'Suporte'})
    await knex('permission_name').insert({permission: 'Support', creation: knex.fn.now(), locale: 'en', id: uuid(), name: 'Support'})
  }
  
  exports.down = function (knex, Promise) {

  }
  