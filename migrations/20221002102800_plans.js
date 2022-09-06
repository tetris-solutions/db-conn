exports.up = function (knex) {
    return Promise.all([
        knex.schema
        .createTable('plan_price', function (table) {
            table.uuid('id').primary()
            table.uuid('plan')
                .references('id')
                .inTable('plan')
                .onDelete('restrict')
                .onUpdate('restrict')
            table.float('value')
            table.string('currency')
            table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
        })
        .alterTable('plan_permission', function (table) {
            table.string('scope').notNullable().defaultTo('global')
            table.int('count_enabled').notNullable().defaultTo(0)
        })
        .alterTable('platform', function (table) {
            table.boolean('enable_token')
                .notNullable()
                .defaultTo(false)
            table.boolean('enable_login')
                .notNullable()
                .defaultTo(false)
            table.boolean('is_hidden')
                .notNullable()
                .defaultTo(false)
        }),

        knex('platform').insert({id: 'all', name: 'Qualquer tipo', creation: knex.fn.now(), enable_token: false, enable_login: true, is_hidden: true}),
        knex('platform').insert({id: 'google', name: 'Google', creation: knex.fn.now(), enable_token: false, enable_login: true}),
        knex('platform').insert({id: 'amazon-ads', name: 'Amazon Ads', creation: knex.fn.now(), enable_token: true, enable_login: false}),
        knex('platform').update({name: 'Amazon', enable_token: false, enable_login: true}).where({id: 'amazon'}),
        knex('platform').update({enable_token: true, enable_login: true}).where({id: 'facebook'}),
        knex('platform').update({enable_token: false, enable_login: true}).where({id: 'adwords'}),
        knex('platform').update({enable_token: false, enable_login: true}).where({id: 'twitter'}),
        knex('platform').update({enable_token: false, enable_login: true}).where({id: 'analytics'}),
        knex('platform').update({enable_token: false, enable_login: true}).where({id: 'doubleclick'}),
        knex('platform').update({enable_token: false, enable_login: true}).where({id: 'vtex'}),
        knex('platform').update({enable_token: false, enable_login: true}).where({id: 'linkedin'}),
        knex('platform').update({enable_token: true, enable_login: true}).where({id: 'microsoft'}),
        knex('platform').update({enable_token: false, enable_login: true}).where({id: 'criteo'}),
        knex('platform').update({enable_token: false, enable_login: true}).where({id: 'youtube'}),
        knex('platform').update({enable_token: false, enable_login: true}).where({id: 'linx'}),
        knex('platform').update({enable_token: false, enable_login: true}).where({id: 'taboola'}),
        knex('platform').update({enable_token: false, enable_login: true}).where({id: 'salesforce'}),
        knex('platform').update({enable_token: false, enable_login: true}).where({id: 'pipedrive'}),
        knex('platform').update({enable_token: false, enable_login: true}).where({id: 'rdstation'}),

        knex('account').update({platform: 'amazon-ads'}).where({platform: 'amazon'}),


        knex.schema
        .alterTable('federated_credentials', function (table) {
            table.dropForeign('platform')
            table.foreign('platform').references('id').inTable('platform').onDelete('cascade')
        })
        .alterTable('invite', function (table) {
            table.dropForeign('platform')
            table.foreign('platform').references('id').inTable('platform').onDelete('cascade').nullable()
        })
        .alterTable('permission', function (table) {
            table.dropForeign('app')
            table.dropColumn('app')
            table.foreign('platform').references('id').inTable('platform').onDelete('cascade').nullable()
        })
        .alterTable('account', function (table) {
            table.dropForeign('platform')
            table.foreign('platform').references('id').inTable('platform').onDelete('cascade').notNullable()
        }),

        knex.schema
        .dropTable('app')
        .dropTable('federated_platform'),

    ])
  }
  
  exports.down = function (knex, Promise) {
    return knex.schema
        .dropTable('plan_price')
        .table('plan_permission', function (table) {
            table.dropColumn('scope')
            table.dropColumn('count_enabled')
        })
  }
  