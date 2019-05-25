import { GET_PRODUCTS, NEW_PRODUCT } from "../actions/types";

const initialState = {
  items: [], //represents the get all products
  item: {} //represents single product post
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      console.log("reducer");
      return {
        ...state,
        items: action.payload
      };
    case NEW_PRODUCT:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
