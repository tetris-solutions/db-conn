exports.up = function (knex) {
    return knex.schema.alterTable('federated_credentials', function (table) {
        table.dropColumn('provider')
        table.string('platform')
        .references('id')
        .inTable('federated_platform')
        .defaultTo('email')
    })
}

exports.down = function (knex, Promise) {

}