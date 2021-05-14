import * as actionTypes from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: []}, action) => {
  switch(action.type) {
    case actionTypes.ADD_TO_CART:

    const item = action.payload;
    const existItem = state.cartItems.find((x) => x.id === item.id);

    if (existItem) {
      return {
        ...state, cartItems: state.cartItems.map((x) => x.id === existItem.id 
          ? item
          : x)
      };
    } else {
      return {
        ...state, cartItems: [...state.cartItems, item]
      };
    };

    case actionTypes.SUBTRACT_FROM_CART:
      return {
        ...state, cartItems: state.cartItems.map((x) => x.id === action.payload.id
          ? action.payload
          : x)
      };
    
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state, cartItems: state.cartItems.filter((item) => item.id !== action.payload)
      };
    default:
      return state;
  }
}