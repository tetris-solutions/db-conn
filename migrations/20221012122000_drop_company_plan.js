exports.up = function (knex, Promise) {
  return knex.schema
    .raw('DROP TRIGGER IF EXISTS on_company_plan_insertion ON company_plan;')
    .dropTable('company_plan')
}

exports.down = function (knex, Promise) {

}
