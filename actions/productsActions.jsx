import { GET_PRODUCTS, NEW_PRODUCT } from "./types";
import * as productsService from "../services/productsService";

export const getProducts = () => dispatch => {
  productsService
    .getAll()
    .then(data =>
      dispatch({
        type: GET_PRODUCTS,
        payload: data.dataResponse
      })
    )
    .catch("error");
};

export const createProduct = newProduct => dispatch => {
  console.log("action called");
  productsService
    .addProduct(newProduct)
    .then(product => {
      debugger;
      dispatch({
        type: NEW_PRODUCT,
        payload: product
      });
    })

    .catch("error");
};
