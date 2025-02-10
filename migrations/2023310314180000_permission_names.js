var uuid = require('uuid').v4

exports.up = async function (knex) {
        //ADS, GEO, DEMOGRAPHIC e ECOMMERCE
        await knex('permission_name').insert({permission: 'ScopeADS', creation: knex.fn.now(), locale: 'pt-BR', id: uuid(), name: 'ScopeADS'})
        await knex('permission_name').insert({permission: 'ScopeADS', creation: knex.fn.now(), locale: 'en', id: uuid(), name: 'ScopeADS'})
        
        await knex('permission_name').insert({permission: 'ScopeGEO', creation: knex.fn.now(), locale: 'pt-BR', id: uuid(), name: 'ScopeGEO'})
        await knex('permission_name').insert({permission: 'ScopeGEO', creation: knex.fn.now(), locale: 'en', id: uuid(), name: 'ScopeGEO'})

        await knex('permission_name').insert({permission: 'ScopeDEMOGRAPHIC', creation: knex.fn.now(), locale: 'pt-BR', id: uuid(), name: 'ScopeDEMOGRAPHIC'})
        await knex('permission_name').insert({permission: 'ScopeDEMOGRAPHIC', creation: knex.fn.now(), locale: 'en', id: uuid(), name: 'ScopeDEMOGRAPHIC'})

        await knex('permission_name').insert({permission: 'ScopeECOMMERCE', creation: knex.fn.now(), locale: 'pt-BR', id: uuid(), name: 'ScopeECOMMERCE'})
        await knex('permission_name').insert({permission: 'ScopeECOMMERCE', creation: knex.fn.now(), locale: 'en', id: uuid(), name: 'ScopeECOMMERCE'})
  }
  
exports.down = async function (knex, Promise) {

}
  