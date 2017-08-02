import React from 'react'
import ReactDOM from 'react-dom'
import NoteList from './note-list'
import Form from './form'

ReactDOM.render(<NoteList/>, document.querySelector('#notes'))
ReactDOM.render(<Form/>, document.querySelector('#form'))
