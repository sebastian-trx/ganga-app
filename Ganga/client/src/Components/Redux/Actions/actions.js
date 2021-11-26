import axios from 'axios';

import {GET_PRODUCT, GET_PRODUCT_BY_NAME} from './const'





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


export function getProductByName(name){
    return async function (dispatch) {
        try{
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