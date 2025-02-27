import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import {connect} from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview} />
        <Reviews restaurant={this.props.restaurant} reviews={this.props.reviews} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants,
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (text, restaurantId) => { dispatch({type: 'ADD_REVIEW', text: text, restaurantId: restaurantId}) },
    deleteReview: (revId) => { dispatch({type: 'DELETE_REVIEW', revId: revId}) } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
