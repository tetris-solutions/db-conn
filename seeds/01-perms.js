var predefinedRoles = exports.predefinedRoles = {
  admin: 'a89f4626-e10f-469a-8bc3-3fc33e4a0487'
}

var uuid = require('uuid').v4

exports.seed = function (knex, Promise) {
  function sequential (promiseFactories) {
    var promise = Promise.resolve()

    promiseFactories.forEach(function (factory) {
      promise = promise.then(factory)
    })

    return promise
  }

  return sequential([
    function () {
      return knex('scope').del()
    },
    function () {
      return knex('scope').insert([
        {id: 'Tetris', name: 'Tetris Base'},
        {id: 'AdPeek', name: 'AdPeek App'}
      ])
    },
    function () {
      return knex('permission').del()
    },
    function () {
      return knex('permission').insert([
        {id: 'CreateRole', scope: 'Tetris'},
        {id: 'EditRoleMembers', scope: 'Tetris'}
      ])
    },
    function () {
      return knex('permission_name').del()
    },
    function () {
      return knex('permission_name').insert([
        {id: uuid(), permission: 'CreateRole', locale: 'pt-BR', name: 'Criar grupo'},
        {id: uuid(), permission: 'CreateRole', locale: 'en', name: 'Create role'},
        {id: uuid(), permission: 'EditRoleMembers', locale: 'pt-BR', name: 'Editar membros de grupo'},
        {id: uuid(), permission: 'EditRoleMembers', locale: 'en', name: 'Edit role members'}
      ])
    },
    function () {
      return knex('predefined_role').del()
    },
    function () {
      return knex('predefined_role').insert({id: predefinedRoles.admin})
    },
    function () {
      return knex('predefined_role_name').del()
    },
    function () {
      return knex('predefined_role_name').insert([
        {id: uuid(), predefined_role: predefinedRoles.admin, locale: 'en', name: 'Administrator'},
        {id: uuid(), predefined_role: predefinedRoles.admin, locale: 'pt-BR', name: 'Administrador'}
      ])
    },
    function () {
      return knex('predefined_role_permission').del()
    },
    function () {
      return knex('predefined_role_permission').insert([
        {id: uuid(), predefined_role: predefinedRoles.admin, permission: 'CreateRole'},
        {id: uuid(), predefined_role: predefinedRoles.admin, permission: 'EditRoleMembers'}
      ])
    }
  ])
}
