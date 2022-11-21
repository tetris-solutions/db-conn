
exports.up = async function (knex) {
  await knex('platform').insert({id: 'email', name: 'E-mail', creation: knex.fn.now(), enable_token: false, enable_login: true})
}
  
exports.down = async function (knex, Promise) {
}
  

