import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  filteredRevs = () => this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)

  renderReviews = () => {
    return this.filteredRevs().map(review => <Review review={review} key={review.id} delete={this.props.deleteReview} />)
  } 

  render() {
    console.log(this.props)
    if(this.props.reviews.length > 0) {
      return(
        <ul>
          {this.renderReviews()}
        </ul>
      );
    } else {
     return(
      <div>Please let us know what you think.</div>
     ) 
    }
  }
};

export default Reviews;