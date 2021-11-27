import axios from 'axios';

import {GET_PRODUCT, GET_PRODUCT_BY_NAME, FILTER_PRICE_BY_RANGE, ORDER_BY_PRICE} from './const'





export function getProduct() {
    return async function (dispatch) {
        let product = await axios.get('http://localhost:3001/product')
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