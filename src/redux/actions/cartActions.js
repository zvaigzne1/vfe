import * as actionTypes from '../constants/cartConstants';

export const addToCart = (item) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: item.id,
      qty: item.qty,
      label: item.label,
      price: item.price,
      symbol: item.symbol
    }
  })
  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const subtractFromCart = (item) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.SUBTRACT_FROM_CART,
    payload: {
      id: item.id,
      qty: item.qty,
      label: item.label,
      price: item.price,
      symbol: item.symbol
    }
  })
  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id
  })
  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};