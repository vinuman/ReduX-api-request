import * as actionTypes from "./actionTypes.js";

export const addToCart = (product) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product_id) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: product_id,
  };
};

export const checkout = () => {
  return {
    type: actionTypes.CHECKOUT,
  };
};
