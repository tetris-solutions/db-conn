var fs = require('fs')
exports.up = function (knex, Promise) {
  function readSql (name) {
    return fs.readFileSync(__dirname + '/sql/' + name + '.sql', {encoding: 'utf8'})
  }
  return knex.schema
    .raw('DROP TRIGGER IF EXISTS on_user_role_insertion ON user_role;')
    .raw(readSql('check_role_duplication'))
    .raw(readSql('on_user_role_insertion'))
}

exports.down = function (knex, Promise) {
  return knex.schema
    .raw('drop trigger on_user_role_insertion;')
    .raw('drop function check_role_duplication;')
}
