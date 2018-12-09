// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ""
  }

  handleChange = e => {
    this.setState({ name: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({name: ""})
  }

  render() {
    return(
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <p>
            <label>Name:</label>
            <br />
            <input type="text" placeholder="Type Band Name Here" value={this.state.name} onChange={e => this.handleChange(e)}/>
          </p>
            <input type="submit" value="Add Band"/>
        </form>
      </div>
    )
  }
}



export default BandInput
