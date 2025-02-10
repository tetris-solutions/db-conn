var uuid = require('uuid').v4

exports.up = async function (knex) {
    await knex('parameters').insert({id: 'test_days', value: '30', type_value: 'number', creation: knex.fn.now()})
    await knex('parameters').insert({id: 'enable_payments', value: 'false', type_value: 'boolean', creation: knex.fn.now()})
   
  }
  
  exports.down = function (knex, Promise) {

  }
  