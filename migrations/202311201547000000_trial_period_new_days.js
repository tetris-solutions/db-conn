exports.up = async function (knex) {
    await knex.schema.alterTable('trial_period', table => {
        table.integer('days_to_expired').defaultTo(0);
    })
}
  
exports.down = async function (knex, Promise) {

}
  