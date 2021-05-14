import * as actionTypes from '../constants/productConstants';

const initialState = {
  loading: false,
  product: {}
}

export const getProductReducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return{
        loading: true,
        product: {}
      }    
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        product: action.payload
      }
    case actionTypes.GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}