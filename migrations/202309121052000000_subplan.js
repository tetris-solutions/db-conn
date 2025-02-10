exports.up = async function (knex) {
    await knex.schema
        .createTable('subplan', function (table) {
            table.uuid('id').primary()
            table.string('name').notNullable()
            table.string('type').notNullable()
            table.string('product_id')
            table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
        })

    await knex.schema
        .createTable('subplan_permission', function (table) {
            table.uuid('id').primary()

            table.uuid('subplan')
              .references('id')
              .inTable('subplan')
              .onDelete('cascade')
              .onUpdate('restrict')
              .notNullable()
      
            table.string('permission', 30)
              .references('id')
              .inTable('permission')
              .onDelete('cascade')
              .onUpdate('restrict')
              .notNullable()
      
            table.timestamp('creation')
              .notNullable()
              .defaultTo(knex.fn.now())
        })

    await knex.schema
        .createTable('plan_subplan', function (table) {
            table.uuid('id').primary()

            table.uuid('plan')
                .references('id')
                .inTable('plan')
                .onDelete('cascade')
                .onUpdate('restrict')
                .notNullable()

            table.uuid('subplan')
                .references('id')
                .inTable('subplan')
                .onDelete('cascade')
                .onUpdate('restrict')
                .notNullable()

            table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
        })

    await knex.schema
        .createTable('user_subplan', function (table) {
            table.uuid('id').primary()

            table.uuid('user')
                .references('id')
                .inTable('user')
                .onDelete('cascade')
                .onUpdate('restrict')
                .notNullable()

            table.uuid('subplan')
                .references('id')
                .inTable('subplan')
                .onDelete('cascade')
                .onUpdate('restrict')
                .notNullable()

            table.timestamp('creation').notNullable().defaultTo(knex.fn.now())
        })
  }
  
exports.down = async function (knex, Promise) {
    return knex.schema
        .dropTable('subplan')
        .dropTable('subplan_permission')
        .dropTable('plan_subplan')
        .dropTable('user_subplan')
}
  