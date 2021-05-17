import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import {connect} from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    console.log(this.props.restaurant.id)
    return (
      <div>
        <ReviewInput restId={this.props.restaurant.id} addReview={this.props.addReview} />
        <Reviews />
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
    addReview: (text, restId) => { dispatch({type: 'ADD_REVIEW', text: text, restId: restId}) },
    deleteReview: (revId) => { dispatch({type: 'DELETE_REVIEW', revId: revId}) } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
