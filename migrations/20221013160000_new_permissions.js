var uuid = require('uuid').v4

exports.up = async function (knex) {
    await knex('permission').insert({id: 'CreateCompany', creation: knex.fn.now()})
    await knex('permission_name').insert({permission: 'CreateCompany', creation: knex.fn.now(), locale: 'pt-BR', id: uuid(), name: 'Criar Empresa'})
    await knex('permission_name').insert({permission: 'CreateCompany', creation: knex.fn.now(), locale: 'en', id: uuid(), name: 'Create Company'})
  }
  
  exports.down = function (knex, Promise) {

  }
  