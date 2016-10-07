var uuid = require('uuid').v4
var permissions = require('./01-perms').permissions

var filter = require('lodash/filter')
var map = require('lodash/map')
var without = require('lodash/without')

exports.seed = function (knex, Promise) {
  var plans = {
    demo: {id: uuid()},
    starterPack: {id: uuid()},
    ultimate: {id: uuid()}
  }

  function sequential (promiseFactories) {
    var promise = Promise.resolve()

    promiseFactories.forEach(function (factory) {
      promise = promise.then(factory)
    })

    return promise
  }

  var perms = map(filter(permissions, {app: 'AdPeek'}), 'id')

  return sequential([
    function () {
      return knex('plan').del()
    },
    function () {
      return knex('plan').insert([plans.demo, plans.starterPack, plans.ultimate])
    },
    function () {
      return knex('plan_name').insert([
        {id: uuid(), plan: plans.demo.id, locale: 'pt-BR', name: 'Demo'},
        {id: uuid(), plan: plans.demo.id, locale: 'en', name: 'Demo'},

        {id: uuid(), plan: plans.starterPack.id, locale: 'pt-BR', name: 'Plano inicial'},
        {id: uuid(), plan: plans.starterPack.id, locale: 'en', name: 'Starter Pack'},

        {id: uuid(), plan: plans.ultimate.id, locale: 'pt-BR', name: 'Plano completo'},
        {id: uuid(), plan: plans.ultimate.id, locale: 'en', name: 'Ultimate'}
      ])
    },
    function () {
      var demoPerms = perms.map(function (permission) {
        return {id: uuid(), plan: plans.demo.id, permission: permission}
      })
      var starterPackPerms = without(perms, 'APBrowseReports', 'APEditReports').map(function (permission) {
        return {id: uuid(), plan: plans.starterPack.id, permission: permission}
      })
      var ultimatePerms = perms.map(function (permission) {
        return {id: uuid(), plan: plans.ultimate.id, permission: permission}
      })

      return knex('plan_permission').insert(demoPerms.concat(starterPackPerms).concat(ultimatePerms))
    }
  ])
}
