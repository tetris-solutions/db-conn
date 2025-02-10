var uuid = require('uuid').v4

exports.up = async function (knex) {
    const newIDPlan = uuid()
    await knex('plan').update({
        weight: 4,
    }).where({ weight: 3})

    await knex('plan').insert({
        id: newIDPlan,
        weight: 3,
        is_dynamic: false,
        is_signable: true,
    })

    await knex('plan_name').insert({
        id: uuid(),
        name: 'Profissional',
        plan: newIDPlan,
        locale: 'pt-BR'
    })

    await knex('plan_name').insert({
        id: uuid(),
        name: 'Professional',
        plan: newIDPlan,
        locale: 'en'
    })
  }
  
exports.down = async function (knex, Promise) {

}
  