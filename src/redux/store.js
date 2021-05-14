import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getProductReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';

const reducer = combineReducers({
  cart: cartReducer,
  getProduct: getProductReducer
});

const middleware = [thunk];

const store = createStore(
  reducer, 
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;