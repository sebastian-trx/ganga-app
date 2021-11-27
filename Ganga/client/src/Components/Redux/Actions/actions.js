import axios from 'axios';

import { GET_PRODUCT, GET_PRODUCT_BY_NAME, GET_USER } from './const'



export function getProduct() {
    return async function (dispatch) {
        let product = await axios.get('http://localhost:3001/product')
        console.log('soy el product de getProduct: ', product)
        dispatch({
            type: GET_PRODUCT,
            payload: product.data
        })
    }
}

export function getProductByName(name) {
    return async function (dispatch) {
        try {
            let product = await axios.get('http://localhost:3001/product?name=' + name)
            return dispatch({
                type: GET_PRODUCT_BY_NAME,
                payload: product.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export function getUser(){
    return async function (dispatch) {
        const info = await axios.get("http://localhost:3001/sessionActive")
        return dispatch({
            type: GET_USER,
            payload: info
        })
    }
}