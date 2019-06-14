const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/', (req, res) => {
  // get server data
  // then render data using view
  // then catch error
  db.getBeasts()
    .then(beast => res.render('index', { beast }))
    .catch()
})

router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  db.getBeast(id)
    .then(beast => res.render('beast', beast))
    .catch()
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getBeast(id)
    .then(beast => res.render('beast', beast))
    .catch()
})

module.exports = router
