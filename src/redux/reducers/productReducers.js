import * as actionTypes from '../constants/productConstants';

const initialState = {
  loading: false,
  product: {},
  options: []
}

export const getProductReducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return{
        loading: true,
        product: {},
        options: []
      }    
    case actionTypes.GET_PRODUCTS_SUCCESS:

      const productOptions = [];
      Object.keys(action.payload.options).forEach((key, index) => {
        productOptions.push({
          label: action.payload.options[key].label,
          price: action.payload.options[key].price.value,
          symbol: action.payload.options[key].price.currency.symbol,
          id: index,
          qty: 0
        });  
      });

      return {
        loading: false,
        product: action.payload,
        options: productOptions
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