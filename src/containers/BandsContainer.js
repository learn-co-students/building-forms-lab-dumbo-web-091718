import React, { Component } from 'react';
import { connect } from 'react-redux';

class BandsContainer extends Component {
  render() {
    let bandArray = this.props.bands.map((band, index) => <li key={index}>{band}</li>)
    return(
      <div>
        {bandArray}
      </div>
    )
  }
}

 const mapStateToProps = state => {
   return { bands: state.bands }
 }

export default connect(mapStateToProps)(BandsContainer)
