/* eslint-disable */
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
//const {sequelize} = require('./models')
const mongoose = require('mongoose')

const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)
// use {force: true} as a parameter to clear database - drop the tables
/*sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
})*/ 
mongoose.connect(config.dbURL, config.dbOptions)
mongoose.connection
  .once('open', () => {
    console.log(`Mongoose - successful connection ...`)
    app.listen(process.env.PORT || config.port, () => console.log(`Server start on port ${config.port} ...`))
  })
  .on('error', error => console.warn(error))