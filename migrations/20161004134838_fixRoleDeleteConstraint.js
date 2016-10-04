var fs = require('fs')
exports.up = function (knex, Promise) {
  function readSql (name) {
    return fs.readFileSync(__dirname + '/sql/' + name + '.sql', {encoding: 'utf8'})
  }
  return knex.schema
    .raw('DROP TRIGGER IF EXISTS on_user_role_deletion ON user_role;')
    .raw(readSql('check_if_user_is_owner'))
    .raw(readSql('on_user_role_deletion'))
}

exports.down = function (knex, Promise) {
  return knex.schema
    .raw('DROP TRIGGER IF EXISTS check_if_user_is_owner ON user_role;')
    .raw('drop function on_user_role_deletion();')
}
