var knex = require('knex')
var config = require('../knexfile')
var path = require('path')
var logger = require('./logger').logger
var serializeError = require('@tetris/serialize-error').serializeError
var assign = require('lodash/assign')

var env = process.env.NODE_ENV || 'development'

var db = exports.db = knex(config[env])

var instance = config[env].connection.host

exports.migrate = function migrate () {
  logger.info('running migration', {
    category: 'event',
    event: 'database-migration-init',
    instance: instance
  })

  var migrateConfig = {
    directory: path.resolve(__dirname, '..', 'migrations')
  }

  return db.migrate.latest(migrateConfig)
    .then(function () {
      logger.info('migration complete', {
        category: 'event',
        event: 'database-migration-complete',
        instance: instance
      })
    })
    .catch(function (err) {
      logger.emerg('migration failure', assign(serializeError(err), {
        category: 'event',
        event: 'database-migration-failure',
        instance: instance
      }))
    })
}

exports.seed = function seed () {
  logger.notice('running seed', {
    category: 'event',
    event: 'database-seed-init',
    instance: instance
  })

  var seedConfig = {
    directory: path.resolve(__dirname, '..', 'seeds')
  }

  return db.seed.run(seedConfig)
    .then(function () {
      logger.info('seeding complete', {
        category: 'event',
        event: 'database-seed-complete',
        instance: instance
      })
    })
    .catch(function (err) {
      logger.emerg('seed failure', assign(serializeError(err), {
        category: 'event',
        event: 'database-seed-failure',
        instance: instance
      }))
    })
}
