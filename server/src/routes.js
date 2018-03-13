const Authentication = require('./controllers/Authentication')
const AuthPolicy = require('./policies/AuthPolicy')

// express middleware function
module.exports = (app) => {
  app.post('/register',
    AuthPolicy.register,
    Authentication.register)
}
