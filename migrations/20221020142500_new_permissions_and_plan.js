var uuid = require('uuid').v4

exports.up = async function (knex) {
    await knex.schema
        .alterTable('plan', function (table) {
            table.boolean('is_dynamic').notNullable().defaultTo(false)
        })
    await knex('permission').insert({id: 'EditUsers', creation: knex.fn.now()})
    await knex('permission_name').insert({permission: 'EditUsers', creation: knex.fn.now(), locale: 'pt-BR', id: uuid(), name: 'Editar Usuários'})
    await knex('permission_name').insert({permission: 'EditUsers', creation: knex.fn.now(), locale: 'en', id: uuid(), name: 'Edit Users'})
    await knex('permission').insert({id: 'CanInviteUserCompany', creation: knex.fn.now()})
    await knex('permission_name').insert({permission: 'CanInviteUserCompany', creation: knex.fn.now(), locale: 'pt-BR', id: uuid(), name: 'Convidar Usuário Para Empresa'})
    await knex('permission_name').insert({permission: 'CanInviteUserCompany', creation: knex.fn.now(), locale: 'en', id: uuid(), name: 'Invite User to Company'})
    await knex('permission').insert({id: 'CanInviteUserApp', creation: knex.fn.now()})
    await knex('permission_name').insert({permission: 'CanInviteUserApp', creation: knex.fn.now(), locale: 'pt-BR', id: uuid(), name: 'Convidar Usuário para o App'})
    await knex('permission_name').insert({permission: 'CanInviteUserApp', creation: knex.fn.now(), locale: 'en', id: uuid(), name: 'Invite User to App'})
  }
  
exports.down = async function (knex, Promise) {
    await knex.schema
        .alterTable('plan', function (table) {
            table.dropColumn('is_dynamic')
        })
}
  