exports.up = async function (knex) {

    await knex.schema.alterTable('feedback', table => {
        table.dropColumn('origin');
    })

    await knex.schema.alterTable('origin_feedback', table => {
        table.dropColumn('id');
    })

    await knex.schema.alterTable('origin_feedback', table => {
        table.string('id').primary();
    })

    await knex.schema.alterTable('feedback', table => {
        table.string('origin')
            .references('id')
            .inTable('origin_feedback')
            .notNullable()
    })

    await knex('origin_feedback').insert({
        id: 'none',
        description: 'Without origin'
    })

    await knex('origin_feedback').insert({
        id: 'cancellation_plan',
        description: 'Cancellation plan'
    })

    await knex('origin_feedback').insert({
        id: 'downgrade_plan',
        description: 'Downgrade plan'
    })
    
  }
  
exports.down = async function (knex, Promise) {

}
  