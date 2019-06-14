const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')
const server = express()

const beastRoutes = require('./routes/beasts')
const homeRoute = require('./routes/home')

// Middleware

server.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({ extended: true }))
server.use(express.static(path.join(__dirname, '/public')))

// Routes

server.use('/beasts', beastRoutes)
server.use('/', homeRoute)

module.exports = server
