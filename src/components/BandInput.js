import React, { Component } from 'react';
import { connect } from 'react-redux';

class BandInput extends Component {

  state = {
    name: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addName(this.state);
    this.setState({
      name: ""
    });
  };

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  };
};

const mapDispatchToProps = dispatch => ({
    addName: bandName => dispatch({ type: 'ADD_NAME', payload: bandName  })
})

export default connect(null, mapDispatchToProps)(BandInput);
