const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  // get server data
  // then render data using view
  // then catch error
  res.redirect('/beasties')
})

router.get('/add', (req, res) => {
  res.send('<h1> phat add page </h1> <br> <a href="/beasties"> Save and Return </a> ')
})

module.exports = router
