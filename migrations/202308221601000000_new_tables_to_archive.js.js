exports.up = async function (knex) {
    await knex.schema
        .createTable('origin_archive', function (table) {
            table.string('id').primary()
            table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
            table.string('description')
        })

    await knex('origin_archive').insert({
        id: 'trial_period_expired',
        description: 'Quando um periodo de teste foi expirado',
        creation: knex.fn.now()
    })

    await knex('origin_archive').insert({
        id: 'plan_expired',
        description: 'Quando um plano foi expirado ou não conseguiu mais ser cobrado',
        creation: knex.fn.now()
    })  

    await knex('origin_archive').insert({
        id: 'user_programmed',
        description: 'Quando foi manualmente arquivado pelo usuário',
        creation: knex.fn.now()
    })  

    await knex.schema
        .createTable('archive_workspace', function (table) {
            table.uuid('id').primary()
            table.uuid('user')
                .references('id')
                .inTable('user')
                .onDelete('restrict')
                .onUpdate('restrict')
                .notNullable()
            table.uuid('company')
                .references('id')
                .inTable('company')
                .onDelete('restrict')
                .onUpdate('restrict')
                .notNullable()
            table.string('origin_archive')
                .references('id')
                .inTable('origin_archive')
                .onDelete('restrict')
                .onUpdate('restrict')
                .notNullable()
            table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
            table.timestamp('executed')
            table.timestamp('cancelled')
        })

    await knex.schema
        .createTable('archive_account', function (table) {
            table.uuid('id').primary()
            table.uuid('user')
                .references('id')
                .inTable('user')
                .onDelete('restrict')
                .onUpdate('restrict')
                .notNullable()
            table.uuid('account')
                .references('id')
                .inTable('account')
                .onDelete('restrict')
                .onUpdate('restrict')
                .notNullable()
            table.uuid('company')
                .references('id')
                .inTable('company')
                .onDelete('restrict')
                .onUpdate('restrict')
            table.string('origin_archive')
                .references('id')
                .inTable('origin_archive')
                .onDelete('restrict')
                .onUpdate('restrict')
                .notNullable()
            table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
            table.timestamp('executed')
            table.timestamp('cancelled')
        })
        
  
}

exports.down = async function (knex, Promise) {
    return knex.schema
        .dropTable('trial_period')
}
