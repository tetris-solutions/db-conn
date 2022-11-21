exports.up = async function (knex) {
    await knex('permission').insert({id: 'AddTokenFacebook', creation: knex.fn.now(), platform: 'facebook'})
    await knex('permission').insert({id: 'AddTokenMicrosoft', creation: knex.fn.now(), platform: 'microsoft'})
    await knex('permission').insert({id: 'AddTokenAmazonAds', creation: knex.fn.now(), platform: 'amazon-ads'})
    await knex('permission').insert({id: 'AddTokenAdwords', creation: knex.fn.now(), platform: 'adwords'})
    await knex('permission').insert({id: 'AddTokenTwitter', creation: knex.fn.now(), platform: 'twitter'})
    await knex('permission').insert({id: 'AddTokenAnalytics', creation: knex.fn.now(), platform: 'analytics'})
    await knex('permission').insert({id: 'AddTokenDoubleClick', creation: knex.fn.now(), platform: 'doubleclick'})
    await knex('permission').insert({id: 'AddTokenVtex', creation: knex.fn.now(), platform: 'vtex'})
    await knex('permission').insert({id: 'AddTokenCriteo', creation: knex.fn.now(), platform: 'criteo'})
    await knex('permission').insert({id: 'AddTokenYoutube', creation: knex.fn.now(), platform: 'youtube'})
    await knex('permission').insert({id: 'AddTokenLinx', creation: knex.fn.now(), platform: 'linx'})
    await knex('permission').insert({id: 'AddTokenTaboola', creation: knex.fn.now(), platform: 'taboola'})
    await knex('permission').insert({id: 'AddTokenSalesforce', creation: knex.fn.now(), platform: 'salesforce'})
    await knex('permission').insert({id: 'AddTokenPipedrive', creation: knex.fn.now(), platform: 'pipedrive'})
    await knex('permission').insert({id: 'AddTokenRdStation', creation: knex.fn.now(), platform: 'rdstation'})
  }
  
  exports.down = function (knex, Promise) {

  }
  