const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getBeast,
  getBeasts,
  editBeast,
  addBeast
}

function getBeasts (db = connection) {
  return db('beasts').select()
}

function getBeast (id, db = connection) {
  return db('beasts').where('id', id).first()
}

function editBeast (beast, id, db = connection) {
  return db('beasts')
    .update(beast)
    .where('id', id)
}

function addBeast (user, db = connection) {
  return db('beasts')
    .insert(user)
}