import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  handleSubmit(e) {
    const data = new FormData(e.target)
    const text = {note: data.get('note')}
    fetch('/create-note', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(text)
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className ="form-group">
          <div>
            <label>Add a Note:</label>
            <textarea className="form-control" name="note" rows="5"></textarea>
          </div>
          <button ref="textarea" className="btn waves-effect" type="submit">Submit</button>
        </div>
      </form>
    )
  }
}
