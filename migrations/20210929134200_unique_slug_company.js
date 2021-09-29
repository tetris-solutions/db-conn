exports.up = function (knex, Promise) {
    return knex.schema.alterTable('company', function(t) {
        t.unique('slug')
    })
}

exports.down = function (knex, Promise) {

}
