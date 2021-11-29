import axios from "axios";

import {
  GET_PRODUCT,
  GET_INFO_GOOGLE,
  LOCAL_LOGIN,
  GET_PRODUCT_BY_NAME,
  FILTER_PRICE_BY_RANGE,
  ORDER_BY_PRICE,
  // URL,
  SIGNUP,
  GET_USER
} from "./const";

export function getProduct() {
    return async function (dispatch) {
        let product = await axios.get(`https://ganga-app.herokuapp.com/product`)
        console.log('soy el product de getProduct: ', product)
        dispatch({
            type: GET_PRODUCT,
            payload: product.data
        })
    }
}


export function getProductByName(name){
    return async function (dispatch) {
        try{
            let product = await axios.get(`https://ganga-app.herokuapp.com/product?name=` + name)
            return dispatch({
                type: GET_PRODUCT_BY_NAME,
                payload: product.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export function filterPriceByRange(price1, price2){
    return{
        type: FILTER_PRICE_BY_RANGE,
        price1, price2 
    }
}

export function orderByPrice (payload){
    console.log(payload)
    return {
        type:ORDER_BY_PRICE,
        payload
    }
}

// action para obtener la sesion activa
export function getUserInfoGoogle(payload) {
  return async function (dispatch) {
    const arr = await axios.get(`https://ganga-app.herokuapp.com/sessionActive/`, {
      withCredentials: true,
    });
    console.log("soy el arr ", arr)
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
      .post(`https://ganga-app.herokuapp.com/localLogin/`, payload, { withCredentials: true })
      .then((response) => {
        dispatch({
          type: LOCAL_LOGIN,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
  };
}

export function getUser(){
    return async function (dispatch) {
        const info = await axios.get(`https://ganga-app.herokuapp.com/sessionActive`)
        return dispatch({
            type: GET_USER,
            payload: info
        })
    }
}

// action para crear un usuario
export function signUp(payload) {
  return async function (dispatch) {
    await axios
      .post(`https://ganga-app.herokuapp.com/user/`, payload)
      .then((response) => {
        dispatch({
          type: SIGNUP,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
  };
}