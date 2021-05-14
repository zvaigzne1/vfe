import * as actionTypes from '../constants/cartConstants';

export const addToCart = (item) => (dispatch) => {
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
};

export const subtractFromCart = (item) => (dispatch) => {
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
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id
  })
};