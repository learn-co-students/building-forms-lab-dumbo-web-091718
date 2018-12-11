// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  render() {
    return(
      <div>
        <form onSubmit={e => this.props.handleSubmit(e)}>
          <input type='text' name='name' onChange={e => this.props.handleChange(e)} value={this.props.state} /><br />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default BandInput
