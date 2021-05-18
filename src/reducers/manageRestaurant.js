import cuid from 'cuid';

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
}, action) {
    switch(action.type) {

        case 'ADD_RESTAURANT':
    
            const restaurant = {
                id: cuid(),
                text: action.text
            }   
            console.log(state)     
            return { restaurants: state.restaurants.concat(restaurant), reviews: state.reviews }

        case 'DELETE_RESTAURANT':

            return { restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.restId), reviews: state.reviews }

        case 'ADD_REVIEW': 

            const review = {
                id: cuid(),
                restaurantId: action.restaurantId,
                text: action.text
            }

            console.log(state)

            return { restaurants: state.restaurants, reviews: state.reviews.concat(review) }

        case 'DELETE_REVIEW':

            return { restaurants: state.restaurants, reviews: state.reviews.filter(review => review.id !== action.revId) }

        default:

            return state;

    }
}
