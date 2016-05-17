var uniqueConfig = {
  client: 'pg',
  connection: {
    database: 'tetris',
    host: process.env.BASE_DB_HOST,
    user: process.env.BASE_DB_USER,
    password: process.env.BASE_DB_PWD
  }
}

# ~~

module.exports = {
  development: uniqueConfig,
  production: uniqueConfig
}
