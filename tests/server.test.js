const request = require('supertest')
const server = require('../server')
const cheerio = require('cheerio')

test('test is working', () => {
  expect(true).toBeTruthy()
})

jest.mock('../db', () => ({
  getBeast: (id) => Promise.resolve(
    { id: 88801, name: 'test beast 1', MOM: 'test MOM 1', Type: 'test type 1', Characteristics: 'test 1 chrs 1, test 1 chrs 2, test 1 chrs 3', Desc: 'test description 1 but we want it to be very very verbose, kinda extremely verbose' }
  ),
  getUsers: () => Promise.resolve([
    { id: 88802, name: 'test beast 2', MOM: 'test MOM 2', Type: 'test type 2', Characteristics: 'test 2 chrs 1, test 2 chrs 2, test 2 chrs 3', Desc: 'test description 2 but we want it to be very very verbose, kinda beaucoup verbose' },
    { id: 88803, name: 'test beast 3', MOM: 'test MOM 3', Type: 'test type 3', Characteristics: 'test 3 chrs 1, test 3 chrs 2, test 3 chrs 3', Desc: 'test description 3 but we want it to be very very verbose, kinda giga verbose' }
  ])
}))

test('GET /', () => {
  return request(server)
    .get('/')
    .expect(200)
    .then((res) => {
      const $ = cheerio.load(res.text)
      const firstLiText = $('h1').first().text()
      expect(firstLiText).toBe('Index page')
    })
    .catch(err => expect(err).toBeNull())
})
