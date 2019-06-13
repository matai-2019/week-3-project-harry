const express = require('express')
const hbs = require('express-handlebars')

const beastRoutes = require('./routes/users')

const server = express()

// Middleware

server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.use(express.urlencoded({ extended: true }))

// Routes

server.use('/', beastRoutes)

module.exports = server
