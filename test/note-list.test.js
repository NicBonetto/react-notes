const { describe, it } = require('mocha')
const { expect } = require('chai')
const request = require('request')

describe('index.js', () => {
  describe('app.get()', () => {
    it('Uses an Express GET route to retrieve a list of notes from the database', () => {
      request('http://localhost:3000/notes', (err, res, body) => {
        if (err) console.log(err)
        expect(JSON.parse(body)).to.be.an.instanceof(Array)
      })
    })
  })
})
