import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageRestaurant from './reducers/manageRestaurant';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initState = {restaurants: [], reviews: []}
const store = createStore(manageRestaurant, initState);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);
