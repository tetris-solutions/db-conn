var uuid = require('uuid').v4

exports.up = async function (knex) {
    await knex('parameters').insert({
        id: 'days_to_archive_a_workspace',
        value: '30',
        type_value: 'number', 
        description: 'Quantidade de dias que uma workspace deve ficar arquivada antes de ser excluída',
        creation: knex.fn.now()
    })

    await knex('parameters').insert({
        id: 'days_to_archive_a_connection',
        value: '30',
        type_value: 'number',
        description: 'Quantidade de dias que uma conexão deve ficar arquivada antes de ser excluída',
        creation: knex.fn.now()
    })
}

exports.down = function (knex, Promise) {

}
