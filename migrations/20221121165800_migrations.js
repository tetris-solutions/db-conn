var uuid = require('uuid').v4
var fs = require('fs')

exports.up = async function (knex) {
    function readSql (name) {
        return fs.readFileSync(__dirname + '/sql/' + name + '.sql', {encoding: 'utf8'})
      }
    // role pre-defined
    const odashRead = '28131d8a-7153-4424-9b33-64be383fe6b1'
    await knex('predefined_role').insert({id: odashRead})
    await knex('predefined_role_name').insert([
        {id: uuid(), predefined_role: odashRead, locale: 'en', name: 'oDash Read'},
        {id: uuid(), predefined_role: odashRead, locale: 'pt-BR', name: 'oDash Read'},
      ])

    const companiesID = await knex.select('id').from('company')

    await knex('role').insert(
      companiesID.map(companyID => ({
        id: uuid(),
        company: companyID.id,
        name: 'oDash Read',
        creation: knex.fn.now()
      }))
    )

    // company-user
    const companyUsers = await knex.select([
        'company.id AS company_ID',
        'user_role.user AS user_ID'
    ]).from('user_role')
    .innerJoin('role', 'role.id', 'user_role.role')
    .innerJoin('company', 'company.id', 'role.company')

    await knex('company_user').insert(
        companyUsers.map(companyUser => ({
          id: uuid(),
          company: companyUser.company_ID,
          user: companyUser.user_ID,
          creation: knex.fn.now()
        }))
      )
   
    // plans
    const idPlanZero = uuid()
    await knex('plan').insert({
        id: idPlanZero,
        creation: knex.fn.now(),
        weight: 0, 
    })

    await knex('plan_name').insert([{
        id: uuid(),
        name: 'Plano Zero',
        plan: idPlanZero,
        locale: 'pt-BR',
        creation: knex.fn.now()
    }, {
        id: uuid(),
        name: 'Plan Zero',
        plan: idPlanZero,
        locale: 'en',
        creation: knex.fn.now()
    }])

    await knex.schema
    .raw('DROP TRIGGER IF EXISTS on_user_email_insertion ON user_email;')
    .raw('DROP TRIGGER IF EXISTS on_user_role_insertion ON user_role;')
    .raw(readSql('invite_to_user_role'))
    .raw(readSql('on_user_email_insertion'))

    await knex('permission').update({is_role: true}).where({id: 'EditCompany'})
    await knex('permission').update({is_role: true}).where({id: 'EditRole'})
    await knex('permission').update({is_role: true}).where({id: 'ManageTokens'})
    await knex('permission').update({is_role: true}).where({id: 'EditUsers'})

  }
  
exports.down = async function (knex, Promise) {

}
  