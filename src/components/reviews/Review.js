import React, { Component } from 'react';

class Review extends Component {

  render() {
    console.log(this.props)
    const { review } = this.props;

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={event => this.props.delete(review.id)}> X </button>
      </div>
    );
  }

};

export default Review;
