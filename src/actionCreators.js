import { SET_PRODUCTS_DATA } from "./actions";

export const setProducts = products => {
  return { type: SET_PRODUCTS_DATA, payload: products };
};

