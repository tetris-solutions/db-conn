var uuid = require('uuid').v4

exports.up = async function (knex) {
    await knex('parameters').insert({id: 'test_days_next_to_end', value: '5', type_value: 'number', creation: knex.fn.now()})
}

exports.down = function (knex, Promise) {

}
