import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} >
          <input type="text" name="name" value={this.state.text} onChange={this.handleOnChange} ></input>
          <input type="submit" value="Submit" ></input>
        </form>
      </div>
    );
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }
};

export default RestaurantInput;
