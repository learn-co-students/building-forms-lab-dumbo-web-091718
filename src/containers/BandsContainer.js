import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
  
    const displayBands = this.props.bands.map(band => {
      return(
        <li>{band.name}</li>
      )
    })
    return(
      <div>
        <BandInput />
        <ul>
        {displayBands}
        </ul>
      </div>
    )
  }
}

const mapStateToProps =(state)=> {
  return({
    bands: state.bands
  })
}

export default connect(mapStateToProps)(BandsContainer)
