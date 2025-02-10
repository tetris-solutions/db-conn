exports.up = async function (knex) {
    await knex.schema
        .createTable('trial_period', function (table) {
            table.string('id').primary()
            table.uuid('user')
                .references('id')
                .inTable('user')
                .onDelete('restrict')
                .onUpdate('restrict')
            table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
        })
  
}

exports.down = async function (knex, Promise) {
    return knex.schema
        .dropTable('trial_period')
}
