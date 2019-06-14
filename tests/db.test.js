const testEnv = require('./test-environment')
const db = require('../db')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('getBeasts gets all beasties', () => {
  const expected = 3
  return db.getBeasts(testDb)
    .then(beasts => {
      const actual = beasts.length
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

test('getBeast gets a single beast', () => {
  const expected = 'test beast 1'
  return db.getBeast(88801, testDb)
    .then(beast => {
      const actual = beast.name
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

test('addBeast increases length of beasts by 1', () => {
  const expected = 4
  const newBeast = {
    name: 'test beast 4',
    MOM: 'test MOM 4',
    Type: 'test type 4',
    Characteristics: 'test 4 chrs 1, test 4 chrs 2',
    Desc: 'test description 4'
  }
  return db.addBeast(newBeast, testDb)
    .then(() => db.getBeasts(testDb))
    .then(beasts => {
      const actual = beasts.length
      expect(actual).toBe(expected)
    })
})

test('check addBeast returns same id', () => {
  const expected = 88804
  const newBeast = {
    name: 'test beast 4',
    MOM: 'test MOM 4',
    Type: 'test type 4',
    Characteristics: 'test 4 chrs 1, test 4 chrs 2',
    Desc: 'test description 4'
  }
  return db.addBeast(newBeast, testDb)
    .then(user => {
      expect(...user).toBe(expected)
    })
})
