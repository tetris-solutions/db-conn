exports.up = function (knex, Promise) {
  function noop () {
  }

  function addCreation (table) {
    table.timestamp('creation')
      .notNullable()
      .defaultTo(knex.fn.now())
  }

  function normalized (createAttributes) {
    function onCreation (table) {
      table.uuid('id').primary()

      createAttributes(table)

      addCreation(table)
    }

    return onCreation
  }

  function alterUser (table) {
    table.index(['name'])
  }

  var createRole = normalized(function (table) {
    table.uuid('company')
      .references('id')
      .inTable('company')
      .onDelete('restrict')
      .onUpdate('restrict')
      .notNullable()
    table.string('name', 30).notNullable().index()
  })

  var createCompany = normalized(function (table) {
    table.string('name', 30).notNullable().index()

    table.uuid('owner')
      .references('id')
      .inTable('user')
      .onDelete('restrict')
      .onUpdate('restrict')
      .notNullable()
  })

  var createUserRole = normalized(function (table) {
    table.uuid('user')
      .references('id')
      .inTable('user')
      .onDelete('cascade')
      .onUpdate('restrict')
      .notNullable()

    table.uuid('role')
      .references('id')
      .inTable('role')
      .onDelete('restrict')
      .onUpdate('restrict')
      .notNullable()

    table.unique(['user', 'role'])
  })

  var createPermission = function (table) {
    table.string('id', 30).primary()
    addCreation(table)
  }

  var createRolePermission = normalized(function (table) {
    table.uuid('role')
      .references('id')
      .inTable('role')
      .onDelete('cascade')
      .onUpdate('restrict')
      .notNullable()

    table.string('permission', 30)
      .references('id')
      .inTable('permission')
      .onDelete('cascade')
      .onUpdate('restrict')
      .notNullable()

    table.unique(['role', 'permission'])
  })

  var createLocale = function (table) {
    table.string('id', 5).primary()
    table.string('name', 30).notNullable().index()
    addCreation(table)
  }

  var createPermissionName = normalized(function (table) {
    table.string('locale', 5)
      .references('id')
      .inTable('locale')
      .onDelete('cascade')
      .onUpdate('restrict')
      .notNullable()

    table.string('permission', 30)
      .references('id')
      .inTable('permission')
      .onDelete('cascade')
      .onUpdate('restrict')
      .notNullable()

    table.string('name', 50).notNullable().index()

    table.unique(['locale', 'permission'])
  })

  var createPredefinedRolePermission = normalized(function (table) {
    table.uuid('predefined_role')
      .references('id')
      .inTable('predefined_role')
      .onDelete('cascade')
      .onUpdate('restrict')
      .notNullable()

    table.string('permission', 30)
      .references('id')
      .inTable('permission')
      .onDelete('cascade')
      .onUpdate('restrict')
      .notNullable()

    table.unique(['predefined_role', 'permission'])
  })

  var createPredefinedRoleName = normalized(function (table) {
    table.string('locale', 5)
      .references('id')
      .inTable('locale')
      .onDelete('cascade')
      .onUpdate('restrict')
      .notNullable()

    table.uuid('predefined_role')
      .references('id')
      .inTable('predefined_role')
      .onDelete('cascade')
      .onUpdate('restrict')
      .notNullable()

    table.string('name', 30).notNullable().index()

    table.unique(['locale', 'predefined_role'])
  })

  return knex.schema
    .raw('ALTER TABLE "user" ALTER "name" TYPE character varying(30);')
    .table('user', alterUser)
    .createTable('company', createCompany)
    .createTable('role', createRole)
    .createTable('user_role', createUserRole)
    .createTable('permission', createPermission)
    .createTable('role_permission', createRolePermission)
    .createTable('locale', createLocale)
    .createTable('permission_name', createPermissionName)
    .createTable('predefined_role', normalized(noop))
    .createTable('predefined_role_name', createPredefinedRoleName)
    .createTable('predefined_role_permission', createPredefinedRolePermission)
}

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTable('predefined_role_permission')
    .dropTable('predefined_role_name')
    .dropTable('predefined_role')
    .dropTable('permission_name')
    .dropTable('locale')
    .dropTable('role_permission')
    .dropTable('permission')
    .dropTable('user_role')
    .dropTable('role')
    .dropTable('company')
    .table('user', function (table) {
      table.dropIndex(['user'])
    })
    .raw('ALTER TABLE "user" ALTER "name" TYPE character varying(50);')

}
