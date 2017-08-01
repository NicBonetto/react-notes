import React from 'react'

export default class NoteList extends React.Component {
  constructor() {
    super()
    this.state = {notes: []}
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
        <div className="panel panel-warning" key={element.id}>
          <div className="panel-heading">
            <h4 className="panel-title">Note #{element.id}</h4>
          </div>
          <div className="panel-body">{element.note_content}</div>
        </div>
      )
    })

    return (
      <div className="panel panel-warning">
        {notes}
      </div>
    )
  }
}
