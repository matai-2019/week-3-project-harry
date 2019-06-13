const express = require('express')
const hbs = require('express-handlebars')

const server = express()

const beastRoutes = require('./routes/beasts')
const homeRoute = require('./routes/home')

// Middleware

server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.use(express.urlencoded({ extended: true }))

// Routes

server.use('/beasties', beastRoutes)
server.use('/', homeRoute)

module.exports = server
