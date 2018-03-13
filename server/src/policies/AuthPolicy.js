const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      passwors: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status('400').send({
            error: 'Please enter correct email adress'
          })
          break
        case 'password':
          res.status('400').send({
            error: 'Passwords must satisfy complexity requirements'
          })
          break
        default:
          res.status('400').send({
            error: 'Invalid data'
          })
      }
    } else {
      next()
    }
  }
}
