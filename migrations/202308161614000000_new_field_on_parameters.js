exports.up = async function (knex) {
    await knex.schema
        .alterTable('parameters', function (table) {
            table.string('description')
        })

    await knex('parameters')
        .update({ description: 'A quantidade de dia para o período de teste' })
        .where({ id: 'test_days' })

    await knex('parameters')
        .update({ description: 'Uma flag que permite cobrança (é só para periodo de desenvolvimento)' })
        .where({ id: 'enable_payments' })

    await knex('parameters')
        .update({ description: 'O número de dia para deteminar que o período de teste está próximo do fim' })
        .where({ id: 'test_days_next_to_end' })

    await knex('parameters')
        .update({ description: 'A referência de qual plano é usado para o período de teste' })
        .where({ id: 'test_days_plan_id' })

    
  }
  
exports.down = async function (knex, Promise) {
    await knex.schema
        .alterTable('parameters', function (table) {
            table.dropColumn('description')
        })
}
  