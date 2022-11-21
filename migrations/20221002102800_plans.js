exports.up = async function (knex) {
    await knex.schema
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
            table.integer('count_enabled').notNullable().defaultTo(0)
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
        })

    await knex('platform').insert({id: 'all', name: 'Qualquer tipo', creation: knex.fn.now(), enable_token: false, enable_login: true, is_hidden: true})
    await knex('platform').insert({id: 'google', name: 'Google', creation: knex.fn.now(), enable_token: false, enable_login: true})
    await knex('platform').insert({id: 'amazon-ads', name: 'Amazon Ads', creation: knex.fn.now(), enable_token: true, enable_login: false})
    await knex('platform').update({name: 'Amazon', enable_token: false, enable_login: true}).where({id: 'amazon'})
    await knex('platform').update({enable_token: true, enable_login: true}).where({id: 'facebook'})
    await knex('platform').update({enable_token: true, enable_login: false}).where({id: 'adwords'})
    await knex('platform').update({enable_token: true, enable_login: false}).where({id: 'twitter'})
    await knex('platform').update({enable_token: true, enable_login: false}).where({id: 'analytics'})
    await knex('platform').update({enable_token: true, enable_login: false}).where({id: 'doubleclick'})
    await knex('platform').update({enable_token: true, enable_login: false}).where({id: 'vtex'})
    await knex('platform').update({enable_token: true, enable_login: false}).where({id: 'linkedin'})
    await knex('platform').update({enable_token: true, enable_login: true}).where({id: 'microsoft'})
    await knex('platform').update({enable_token: true, enable_login: false}).where({id: 'criteo'})
    await knex('platform').update({enable_token: true, enable_login: false}).where({id: 'youtube'})
    await knex('platform').update({enable_token: true, enable_login: false}).where({id: 'linx'})
    await knex('platform').update({enable_token: true, enable_login: false}).where({id: 'taboola'})
    await knex('platform').update({enable_token: true, enable_login: false}).where({id: 'salesforce'})
    await knex('platform').update({enable_token: true, enable_login: false}).where({id: 'pipedrive'})
    await knex('platform').update({enable_token: true, enable_login: false}).where({id: 'rdstation'})

    await knex('account').update({platform: 'amazon-ads'}).where({platform: 'amazon'})

    await knex.schema
        .alterTable('federated_credentials', function (table) {
            table.dropForeign('platform')
            table.foreign('platform').references('id').inTable('platform').onDelete('cascade')
        })
        .alterTable('invite', function (table) {
            table.dropForeign('platform')
            table.foreign('platform').references('id').inTable('platform').onDelete('cascade')
        })
        .alterTable('permission', function (table) {
            table.dropForeign('app')
            table.dropColumn('app')
            table.string('platform').references('id').inTable('platform').onDelete('cascade')
        })
        .alterTable('account', function (table) {
            table.dropForeign('platform')
            table.foreign('platform').references('id').inTable('platform').onDelete('cascade')
        })

    await knex.schema
        .dropTable('app')
        .dropTable('federated_platform')
  }
  
  exports.down = function (knex, Promise) {
    return knex.schema
        .dropTable('plan_price')
        .table('plan_permission', function (table) {
            table.dropColumn('scope')
            table.dropColumn('count_enabled')
        })
  }
  