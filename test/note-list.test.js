const { describe, it } = require('mocha')
const { expect } = require('chai')
const request = require('request')

describe('index.js', () => {
  describe('GET /notes', () => {
    it('Uses an Express GET route to retrieve a list of notes from the database', done => {
      request('http://localhost:3000/notes', { json: true }, (err, res, body) => {
        if (err) console.log(err)
        expect(body).to.be.an('array').with.length.above(0)
        done()
      })
    })
  })
})
