const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))
const SALT_FACTOR = 10

// create schema and model
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

UserSchema.pre('save', function (next) {
  const user = this

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next()

  // generate a salt
  bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
    if (err) return next(err)

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) return next(err)

      // override the cleartext password with the hashed one
      user.password = hash
      next()
    })
  })
})

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compareAsync(password, this.password)
}

const User = mongoose.model('User', UserSchema)

module.exports = User
