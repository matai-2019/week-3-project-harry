const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/', (req, res) => {
  // get server data
  // then render data using view
  // then catch error
  res.render('cover')
})

router.get('/add', (req, res) => {
  res.render('addBeasts')
})

router.post('/add', (req, res) => {
  const text = req.body
  db.addBeast(text)
    .then(res.redirect('/beasts'))
    .catch()
})

module.exports = router
