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
            return { restaurants: state.restaurants.concat(restaurant) }

        case 'DELETE_RESTAURANT':

            return { restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.restId) }

        case 'ADD_REVIEW': 

            const review = {
                id: cuid(),
                restId: action.restId,
                text: action.text
            }

            console.log(state)

            return { reviews: state.reviews.concat(review) }
        
        default:

            return state;

    }
}
