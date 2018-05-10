// const path = require('path')

module.exports = {
  port: process.env.PORT || 8081,
  dbURL: 'mongodb://localhost/posts',
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
