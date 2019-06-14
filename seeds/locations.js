exports.seed = function (knex, Promise) {
  return knex('locations').del()
    .then(function () {
      return knex('locations').insert([
        {
          id: 501, location: 'Under the bed'

        },
        {
          id: 502, location: 'Global'

        },
        {
          id: 503, location: 'In your dream'

        },
        {
          id: 504, location: 'Australia'

        },
        {
          id: 505, location: 'Antartica'
        }
      ])
    })
}
