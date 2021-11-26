import axios from "axios";

import { GET_PRODUCT, GET_INFO_GOOGLE, LOCAL_LOGIN, URL } from "./const";

export function getProduct() {
  return async function (dispatch) {
    let product = await axios.get("http://localhost:3001/product");
    dispatch({
      type: GET_PRODUCT,
      payload: product.data,
    });
  };
}

// action para obtener la sesion activa
export function getUserInfoGoogle(payload) {
  return async function (dispatch) {
    const arr = await axios.get(URL + "sessionActive/", {
      withCredentials: true,
    });
    return dispatch({
      type: GET_INFO_GOOGLE,
      payload: arr.data,
    });
  };
}

// action para hacer el local login
export function localLogin(payload) {
  return async function (dispatch) {
    await axios
      .post(`${URL}localLogin/`, payload, { withCredentials: true })
      .then((response) => {
        dispatch({
          type: LOCAL_LOGIN,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
  };
}
