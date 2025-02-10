exports.up = async function (knex) {

    await knex.schema.alterTable('feedback', table => {
        table.dropColumn('comentary');
    })

    await knex.schema.alterTable('feedback', table => {
        table.string('commentary');
    })
}
  
exports.down = async function (knex, Promise) {

}
  