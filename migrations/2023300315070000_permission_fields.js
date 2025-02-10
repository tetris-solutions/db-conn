exports.up = async function (knex) {
    await knex.schema
        .alterTable('permission', function (table) {
            table.string('type').notNullable().defaultTo('permission')
            table.string('alias')
        })
        //ADS, GEO, DEMOGRAPHIC e ECOMMERCE
        await knex('permission').insert({id: 'ScopeADS', creation: knex.fn.now(), type: 'scope-import', alias: 'ADS'})
        await knex('permission').insert({id: 'ScopeGEO', creation: knex.fn.now(), type: 'scope-import', alias: 'GEO'})
        await knex('permission').insert({id: 'ScopeDEMOGRAPHIC', creation: knex.fn.now(), type: 'scope-import', alias: 'DEMOGRAPHIC'})
        await knex('permission').insert({id: 'ScopeECOMMERCE', creation: knex.fn.now(), type: 'scope-import', alias: 'ECOMMERCE'})
  }
  
exports.down = async function (knex, Promise) {
    await knex.schema
        .alterTable('permission', function (table) {
            table.dropColumn('type')
            table.dropColumn('alias')
        })
}
  