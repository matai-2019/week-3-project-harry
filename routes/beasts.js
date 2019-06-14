const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/', (req, res) => {
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
