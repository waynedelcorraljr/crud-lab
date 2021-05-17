import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';

class RestaurantsContainer extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants restaurants={this.props.restaurants} reviews={this.props.reviews} deleteRestaurant={this.props.deleteRestaurant} />
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

const mapDispatchToProps = dispatch => ({
    addRestaurant: (text) => { dispatch({type: 'ADD_RESTAURANT', text: text}) },
    deleteRestaurant: (restId) => { dispatch({type: 'DELETE_RESTAURANT', restId: restId}) }
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
