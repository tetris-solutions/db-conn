var predefinedRoles = exports.predefinedRoles = {
  admin: 'a89f4626-e10f-469a-8bc3-3fc33e4a0487'
}

var permissions = exports.permissions = [
  {id: 'CreateRole'},
  {id: 'EditRoleMembers'},
  {id: 'APEditWorkspaces', app: 'AdPeek'},
  {id: 'APEditFolders', app: 'AdPeek'},
  {id: 'APEditCampaigns', app: 'AdPeek'},
  {id: 'APEditOrders', app: 'AdPeek'},
  {id: 'APBrowseReports', app: 'AdPeek'},
  {id: 'APEditReports', app: 'AdPeek'}
]
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
      return knex('app').del()
    },
    function () {
      return knex('app').insert([
        {id: 'AdPeek', name: 'AdPeek App'}
      ])
    },
    function () {
      return knex('permission').del()
    },
    function () {
      return knex('permission')
        .insert(permissions)
    },
    function () {
      return knex('permission_name').del()
    },
    function () {
      return knex('permission_name').insert([
        {id: uuid(), permission: 'CreateRole', locale: 'pt-BR', name: 'Criar grupo'},
        {id: uuid(), permission: 'CreateRole', locale: 'en', name: 'Create role'},
        {id: uuid(), permission: 'EditRoleMembers', locale: 'pt-BR', name: 'Editar membros de grupo'},
        {id: uuid(), permission: 'EditRoleMembers', locale: 'en', name: 'Edit role members'},
        {id: uuid(), permission: 'APEditWorkspaces', locale: 'pt-BR', name: 'Editar Áreas de Trabalho'},
        {id: uuid(), permission: 'APEditWorkspaces', locale: 'en', name: 'Edit Workspaces'},
        {id: uuid(), permission: 'APEditFolders', locale: 'pt-BR', name: 'Editar Pastas'},
        {id: uuid(), permission: 'APEditFolders', locale: 'en', name: 'Edit Folders'},
        {id : uuid(), permission: 'APEditCampaigns', locale: 'pt-BR', name: 'Editar Campanhas'},
        {id : uuid(), permission: 'APEditCampaigns', locale: 'en', name: 'Edit Campaigns'},
        {id : uuid(), permission: 'APEditOrders', locale: 'pt-BR', name: 'Editar Pedidos'},
        {id : uuid(), permission: 'APEditOrders', locale: 'en', name: 'Edit Orders'},
        {id : uuid(), permission: 'APBrowseReports', locale: 'pt-BR', name: 'Navegar Relatórios'},
        {id : uuid(), permission: 'APBrowseReports', locale: 'en', name: 'Browse Reports'},
        {id : uuid(), permission: 'APEditReports', locale: 'pt-BR', name: 'Editar Relatórios'},
        {id : uuid(), permission: 'APEditReports', locale: 'en', name: 'Edit Reports'}
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
