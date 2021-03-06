require('dotenv').config()
import express from 'express'
import bodyParser from 'body-parser'
import { getNotes, postNote, deleteNote } from './knex'

const app = express()

app.use(express.static(__dirname + '/public/'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get('/notes', (req, res) => {
  getNotes()
    .then(response => {
      res.json(response)
    })
})

app.post('/create-note', (req, res) => {
  postNote(req.body.note)
    .then(() => res.sendStatus(201))
})

app.delete('/notes/:id', (req, res) => {
  deleteNote(req.params.id)
    .then(() => res.sendStatus(200))
})

app.listen(process.env.PORT)
