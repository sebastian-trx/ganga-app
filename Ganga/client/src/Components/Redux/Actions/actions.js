import axios from 'axios';

import {GET_PRODUCT} from './const'



export function getProduct(){
    return async function (dispatch) {
        let product = await axios.get('http://localhost:3001/product')
        dispatch({
            type: GET_PRODUCT,
            payload: product.data
        })
    }
}