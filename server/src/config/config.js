const path = require('path')

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'blog',
    user: process.env.DB_USER || 'blog',
    password: process.env.DB_PASS || 'blog',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../../blog.sqlite')
    }
  }
}
