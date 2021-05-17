import React, { Component } from 'react';
import  Restaurant from './Restaurant'
import { connect } from 'react-redux'

class Restaurants extends Component {

  renderRestaurants = () => {
    return this.props.restaurants.map(restaurant => <Restaurant restaurant={restaurant} key={restaurant.id} delete={this.props.deleteRestaurant} />)
  }

  render() {
    console.log(this.props)
    if(this.props.restaurants.length > 0) {
      return(
        <ul>
          {this.renderRestaurants()}
        </ul>
      );
    } else {
     return(
      <div>Please enter a restaurant to be reviewed.</div>
     ) 
    }
  }
};

export default connect()(Restaurants);