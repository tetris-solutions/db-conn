var fs = require('fs')

exports.up = function (knex, Promise) {
  function readSql (name) {
    return fs.readFileSync(__dirname + '/sql/' + name + '.sql', {encoding: 'utf8'})
  }
  return knex.schema
    .raw('DROP TRIGGER IF EXISTS on_company_plan_insertion ON company_plan;')
    .raw('drop function terminate_current_plan();')
    .raw(readSql('switch_plans'))
    .raw(readSql('on_company_plan_insertion'))
}

exports.down = function (knex, Promise) {
  return knex.schema
    .raw('drop trigger on_company_plan_insertion;')
    .raw('drop function switch_plans();')
}
