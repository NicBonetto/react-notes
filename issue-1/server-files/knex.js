import Knex from 'knex'

const knex = Knex({
  dialect: 'pg',
  connection: 'postegres://localhost:5432/notes'
})

export function getNotes() {
  const query = knex
    .table('notes')
    .select('note_content', 'id')
    .orderBy('id', 'asc')

  return query
}
