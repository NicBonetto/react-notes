import React from 'react'

export default class NoteList extends React.Component {
  constructor() {
    super()
    this.state = {notes: []}
    this.deleteNote = this.deleteNote.bind(this)
  }

  fetchData() {
    fetch('/notes')
      .then(response => response.json())
      .then(data => {
        this.setState({notes: data})
      })
  }

  deleteNote(e) {
    const id = e.target.id
    fetch('/notes/' + id, {
      method: 'DELETE',
    })
      .then(() => this.fetchData())
  }

  componentDidMount() {
    fetch('/notes')
      .then(response => response.json())
      .then(data => {
        this.setState({notes: data})
      })
  }

  render() {
    const notes = this.state.notes.map(element => {
      return (
        <div className="card yellow lighten-2" key={element.id}>
          <div className="card-content">
            <span onClick={this.deleteNote} id={element.id} className="fa fa-times right"></span>
            <div className="card-title">
              <h4 className="panel-title">Note #{element.id}</h4>
            </div>
            <div className="panel-body">{element.note_content}</div>
          </div>
        </div>
      )
    })

    return (
      <div className="panels">
        {notes}
      </div>
    )
  }
}
