module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'blog',
    password: process.env.DB_PASS || 'blog',
    options: {
      operatorsAliases: false,
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './blog.sqlite'
    }
  }
}
