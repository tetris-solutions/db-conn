var uuid = require('uuid').v4

exports.up = async function (knex) {
    await knex('permission').insert({id: 'AddTokenLinkedin', creation: knex.fn.now(), platform: 'linkedin'})
    await knex('permission_name').insert({permission: 'AddTokenLinkedin', creation: knex.fn.now(), locale: 'pt-BR', id: uuid(), name: 'Adicionar LinkedIn'})
    await knex('permission_name').insert({permission: 'AddTokenLinkedin', creation: knex.fn.now(), locale: 'en', id: uuid(), name: 'Add LinkedIn'})
  }
  
  exports.down = function (knex, Promise) {

  }
  