import React, { Component } from 'react';


class ReviewInput extends Component {

  state = {
    text: ''
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} >
          <input type="text" value={this.state.text} onChange={this.handleOnChange} ></input>
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
    this.props.addReview(this.state.text, this.props.restaurantId)
    this.setState({
      text: ''
    })
  }
};

export default ReviewInput;
