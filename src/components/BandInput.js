// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {
  state = {
    name: ""
  }
  changeHandler =(e)=> {
    this.setState({
      name: e.target.value
    })
  }

  submitHandler =(e)=> {
    console.log(this.state)
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({name: ""})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.submitHandler}>
        <input onChange={this.changeHandler} value={this.state.name} placeholder="Name"/>
        <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps =(dispatch)=> {
  return {
    addBand: (band) => dispatch({type:"ADD_BAND", payload:band})
  }
}

export default connect(null, mapDispatchToProps)(BandInput)
