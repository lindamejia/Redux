import axios from "axios";
import * as helpers from "./serviceHelpers";

const getAll = () => {
  const config = {
    method: "GET",
    url: helpers.API_HOST_PREFIX + "/api/products",
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

const addProduct = payload => {
  const config = {
    method: "POST",
    url: helpers.API_HOST_PREFIX + "/api/products",
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

export { getAll, addProduct };
