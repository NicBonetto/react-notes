import Knex from 'knex'

const knex = Knex({
  dialect: 'pg',
  connection: process.env.DATABASE_URL
})

export function getNotes() {
  const query = knex
    .table('notes')
    .select('note_content', 'id')
    .orderBy('id', 'asc')

  return query
}

export function postNote(newNote) {
  const query = knex
    .insert({ note_content: newNote })
    .into('notes')

  return query
}

export function deleteNote(id) {
  const query = knex
    .table('notes')
    .where('id', '=', id)
    .del()

  return query
}
