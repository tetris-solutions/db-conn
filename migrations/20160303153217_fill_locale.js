exports.up = async function (knex) {
  try {
    await knex('locale').insert({ creation: knex.fn.now(), id: 'pt-BR', name: 'Português'})
    await knex('locale').insert({ creation: knex.fn.now(), id: 'en', name: 'English'})
  } catch (e) {
    // se falhar, não tem problema
  }
}

exports.down = function (knex, Promise) {

}
