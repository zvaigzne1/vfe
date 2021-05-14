import * as actionTypes from '../constants/productConstants';
import axios from 'axios';

export const getProduct = () => async (dispatch) => {
  try {
    dispatch({type: actionTypes.GET_PRODUCTS_REQUEST})

    const { data } = await axios.get("https://fe-assignment.vaimo.net/");

    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data.product
    })
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
};
