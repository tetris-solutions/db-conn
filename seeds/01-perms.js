var predefinedRoles = exports.predefinedRoles = {
  admin: 'a89f4626-e10f-469a-8bc3-3fc33e4a0487',
  odashRead: '28131d8a-7153-4424-9b33-64be383fe6b1'
}

var permissions = exports.permissions = [
  {id: 'EditRole'},
  {id: 'EditCompany'},
  {id: 'ManageTokens'},
  {id: 'APEditWorkspaces', app: 'AdPeek'},
  {id: 'APEditFolders', app: 'AdPeek'},
  {id: 'APEditCampaigns', app: 'AdPeek'},
  {id: 'APEditOrders', app: 'AdPeek'},
  {id: 'APBrowseReports', app: 'AdPeek'},
  {id: 'APEditReports', app: 'AdPeek'},
  {id: 'APShoppingSetup', app: 'AdPeek'}
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
        {id: 'AdPeek', name: 'Tetris Manager'}
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
        {id: uuid(), permission: 'EditRole', locale: 'pt-BR', name: 'Editar grupo'},
        {id: uuid(), permission: 'EditRole', locale: 'en', name: 'Edit role'},

        {id: uuid(), permission: 'EditCompany', locale: 'pt-BR', name: 'Editar empresa'},
        {id: uuid(), permission: 'EditCompany', locale: 'en', name: 'Edit company'},

        {id: uuid(), permission: 'ManageTokens', locale: 'pt-BR', name: 'Gerenciar tokens'},
        {id: uuid(), permission: 'ManageTokens', locale: 'en', name: 'Manage tokens'},

        {id: uuid(), permission: 'APEditWorkspaces', locale: 'pt-BR', name: 'Editar Áreas de Trabalho'},
        {id: uuid(), permission: 'APEditWorkspaces', locale: 'en', name: 'Edit Workspaces'},
        {id: uuid(), permission: 'APEditFolders', locale: 'pt-BR', name: 'Editar Pastas'},
        {id: uuid(), permission: 'APEditFolders', locale: 'en', name: 'Edit Folders'},
        {id: uuid(), permission: 'APEditCampaigns', locale: 'pt-BR', name: 'Editar Campanhas'},
        {id: uuid(), permission: 'APEditCampaigns', locale: 'en', name: 'Edit Campaigns'},
        {id: uuid(), permission: 'APEditOrders', locale: 'pt-BR', name: 'Editar Pedidos'},
        {id: uuid(), permission: 'APEditOrders', locale: 'en', name: 'Edit Orders'},
        {id: uuid(), permission: 'APBrowseReports', locale: 'pt-BR', name: 'Navegar Relatórios'},
        {id: uuid(), permission: 'APBrowseReports', locale: 'en', name: 'Browse Reports'},
        {id: uuid(), permission: 'APEditReports', locale: 'pt-BR', name: 'Editar Relatórios'},
        {id: uuid(), permission: 'APEditReports', locale: 'en', name: 'Edit Reports'},

        {id: uuid(), permission: 'APShoppingSetup', locale: 'pt-BR', name: 'Configurar Shopping'},
        {id: uuid(), permission: 'APShoppingSetup', locale: 'en', name: 'Shopping Setup'}
      ])
    },
    function () {
      return knex('predefined_role').del()
    },
    function () {
      return knex('predefined_role')
        .insert({id: predefinedRoles.admin})
        .insert({id: predefinedRoles.odashRead})
    },
    function () {
      return knex('predefined_role_name').del()
    },
    function () {
      return knex('predefined_role_name').insert([
        {id: uuid(), predefined_role: predefinedRoles.admin, locale: 'en', name: 'Administrator'},
        {id: uuid(), predefined_role: predefinedRoles.admin, locale: 'pt-BR', name: 'Administrador'},
        {id: uuid(), predefined_role: predefinedRoles.odashRead, locale: 'en', name: 'oDash Read'},
        {id: uuid(), predefined_role: predefinedRoles.odashRead, locale: 'pt-BR', name: 'oDash Read'},
      ])
    },
    function () {
      return knex('predefined_role_permission').del()
    },
    function () {
      return knex('predefined_role_permission').insert([
        {id: uuid(), predefined_role: predefinedRoles.admin, permission: 'EditRole'},
        {id: uuid(), predefined_role: predefinedRoles.admin, permission: 'EditCompany'},
        {id: uuid(), predefined_role: predefinedRoles.admin, permission: 'ManageTokens'}
      ])
    }
  ])
}
