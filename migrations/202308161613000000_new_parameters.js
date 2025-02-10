var uuid = require('uuid').v4

exports.up = async function (knex) {
    await knex('parameters').insert({id: 'test_days_plan_id', value: '', type_value: 'string', creation: knex.fn.now()})
}

exports.down = function (knex, Promise) {

}
