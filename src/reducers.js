import { SET_PRODUCTS_DATA } from "./actions";

const DEFAULT_STATE = {
  products: []
};
const setProducts = (state = [], action) => {
  return { ...state, ...action.payload };
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_PRODUCTS_DATA:
      return setProducts(state, action);
    default:
      return state;
  }
};

export default rootReducer;
