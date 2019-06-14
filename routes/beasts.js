const express = require('express')
const router = express.Router()

// const db = require('../db')

router.get('/', (req, res) => {
  // get server data
  // then render data using view
  // then catch error
  res.render('index')
})

router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  // get server data
  // then render data using view
  // then catch error
  res.send(`<h1> Beast ID: ${id} </h1> <br> <h1> PHAT EDIT PAGE </h1> <br> <br> <a href="/beasties/${id}"> Save and Return </a>`)
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  // get server data
  // then render data using view
  // then catch error
  res.send(`<h1> Beast ID: ${id} <h1> <br> <h1> Beast ${id} data </h1> <br> <br> <a href="/beasties/${id}/edit">Edit</a>`)
})

module.exports = router
