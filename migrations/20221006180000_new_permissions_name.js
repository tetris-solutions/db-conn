var uuid = require('uuid').v4

exports.up = async function (knex) {
    await knex('permission_name').insert({permission: 'AddTokenFacebook', creation: knex.fn.now(), locale: 'pt-BR', id: uuid(), name: 'Adicionar Facebook'})
    await knex('permission_name').insert({permission: 'AddTokenFacebook', creation: knex.fn.now(), locale: 'en', id: uuid(), name: 'Add Facebook'})
    await knex('permission_name').insert({permission: 'AddTokenMicrosoft', creation: knex.fn.now(), locale: 'pt-BR', id: uuid(), name: 'Adicionar Microsoft'})
    await knex('permission_name').insert({permission: 'AddTokenMicrosoft', creation: knex.fn.now(), locale: 'en', id: uuid(), name: 'Add Microsoft'})
    await knex('permission_name').insert({permission: 'AddTokenAmazonAds', creation: knex.fn.now(), locale: 'pt-BR', id: uuid(), name: 'Adicionar Amazon Ads'})
    await knex('permission_name').insert({permission: 'AddTokenAmazonAds', creation: knex.fn.now(), locale: 'en', id: uuid(), name: 'Add Amazon Ads'})
    await knex('permission_name').insert({permission: 'AddTokenAdwords', creation: knex.fn.now(), locale: 'pt-BR', id: uuid(), name: 'Adicionar Google AdWords'})
    await knex('permission_name').insert({permission: 'AddTokenAdwords', creation: knex.fn.now(), locale: 'en', id: uuid(), name: 'Add Google AdWords'})
    await knex('permission_name').insert({permission: 'AddTokenTwitter', creation: knex.fn.now(), locale: 'pt-BR', id: uuid(), name: 'Adicionar Twitter'})
    await knex('permission_name').insert({permission: 'AddTokenTwitter', creation: knex.fn.now(), locale: 'en', id: uuid(), name: 'Add Twitter'})
    await knex('permission_name').insert({permission: 'AddTokenAnalytics', creation: knex.fn.now(), locale: 'pt-BR', id: uuid(), name: 'Adicionar Google Analytics'})
    await knex('permission_name').insert({permission: 'AddTokenAnalytics', creation: knex.fn.now(), locale: 'en', id: uuid(), name: 'Add Google Analytics'})
    await knex('permission_name').insert({permission: 'AddTokenDoubleClick', creation: knex.fn.now(), locale: 'pt-BR', id: uuid(), name: 'Adicionar DoubleClick'})
    await knex('permission_name').insert({permission: 'AddTokenDoubleClick', creation: knex.fn.now(), locale: 'en', id: uuid(), name: 'Add DoubleClick'})
    await knex('permission_name').insert({permission: 'AddTokenVtex', creation: knex.fn.now(), locale: 'pt-BR', id: uuid(), name: 'Adicionar VTEX'})
    await knex('permission_name').insert({permission: 'AddTokenVtex', creation: knex.fn.now(), locale: 'en', id: uuid(), name: 'Add VTEX'})
    await knex('permission_name').insert({permission: 'AddTokenCriteo', creation: knex.fn.now(), locale: 'pt-BR', id: uuid(), name: 'Adicionar Criteo'})
    await knex('permission_name').insert({permission: 'AddTokenCriteo', creation: knex.fn.now(), locale: 'en', id: uuid(), name: 'Add Criteo'})
    await knex('permission_name').insert({permission: 'AddTokenYoutube', creation: knex.fn.now(), locale: 'pt-BR', id: uuid(), name: 'Adicionar Youtube'})
    await knex('permission_name').insert({permission: 'AddTokenYoutube', creation: knex.fn.now(), locale: 'en', id: uuid(), name: 'Add Youtube'})
    await knex('permission_name').insert({permission: 'AddTokenLinx', creation: knex.fn.now(), locale: 'pt-BR', id: uuid(), name: 'Adicionar Linx'})
    await knex('permission_name').insert({permission: 'AddTokenLinx', creation: knex.fn.now(), locale: 'en', id: uuid(), name: 'Add Linx'})
    await knex('permission_name').insert({permission: 'AddTokenTaboola', creation: knex.fn.now(), locale: 'pt-BR', id: uuid(), name: 'Adicionar Taboola'})
    await knex('permission_name').insert({permission: 'AddTokenTaboola', creation: knex.fn.now(), locale: 'en', id: uuid(), name: 'Add Taboola'})
    await knex('permission_name').insert({permission: 'AddTokenSalesforce', creation: knex.fn.now(), locale: 'pt-BR', id: uuid(), name: 'Adicionar SalesForce'})
    await knex('permission_name').insert({permission: 'AddTokenSalesforce', creation: knex.fn.now(), locale: 'en', id: uuid(), name: 'Add SalesForce'})
    await knex('permission_name').insert({permission: 'AddTokenPipedrive', creation: knex.fn.now(), locale: 'pt-BR', id: uuid(), name: 'Adicionar Pipedrive'})
    await knex('permission_name').insert({permission: 'AddTokenPipedrive', creation: knex.fn.now(), locale: 'en', id: uuid(), name: 'Add Pipedrive'})
    await knex('permission_name').insert({permission: 'AddTokenRdStation', creation: knex.fn.now(), locale: 'pt-BR', id: uuid(), name: 'Adicionar RDStation'})
    await knex('permission_name').insert({permission: 'AddTokenRdStation', creation: knex.fn.now(), locale: 'en', id: uuid(), name: 'Add RDStation'})
  }
  
  exports.down = function (knex, Promise) {

  }
  