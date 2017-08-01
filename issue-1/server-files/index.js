import express from 'express'
import { getNotes } from './knex'

const app = express()

app.use(express.static(__dirname + 'public/'))

app.get('/notes', (req, res) => {
  getNotes()
    .then(response => {
      res.json(response)
    })
})

app.listen(3000)
