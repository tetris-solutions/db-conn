
exports.up = async function (knex) {
    await knex('parameters').insert({
        id: 'enable_news_users_by_exclusive_invite_on_trials_period',
        value: 'true',
        type_value: 'boolean',
        description: 'Flag se permite ou não que novos usuários sejam registrado no período de testes (É mais útil durante a fase de teste)',
        creation: knex.fn.now()
    })
}

exports.down = function (knex, Promise) {

}
