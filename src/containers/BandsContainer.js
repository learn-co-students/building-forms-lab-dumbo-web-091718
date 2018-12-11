import React, { Component } from 'react'
import BandCard from '../components/BandCard'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {

  state = {
    name: ''
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addBand(this.state)

    // reset input field
    this.setState({
      name: ''
    })
  }

  render() {
    console.log(this.props)
    const renderBands = this.props.bands.map(band => {
      return <BandCard key={band.id} band={band} />
    })

    return(
      <div>
        <BandInput state={this.state.name} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        {renderBands}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: band => {
      dispatch({type: 'ADD_BAND', band})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
