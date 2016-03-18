var fs = require('fs')

exports.up = function (knex, Promise) {
  function readSql (name) {
    return fs.readFileSync(__dirname + '/sql/' + name + '.sql', {encoding: 'utf8'})
  }
  return knex.schema
    .raw('DROP TRIGGER IF EXISTS on_user_email_insertion ON user_role;')
    .raw(readSql('invite_to_user_role'))
    .raw(readSql('on_user_email_insertion'))
}

exports.down = function (knex, Promise) {
  return knex.schema
    .raw('drop trigger on_user_email_insertion;')
    .raw('drop function invite_to_user_role;')
}
