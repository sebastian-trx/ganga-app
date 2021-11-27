import { GET_PRODUCT, GET_PRODUCT_BY_NAME, FILTER_PRICE_BY_RANGE } from '../Actions/const'



const initialState = {
    product: [],
    allProducts2: [],

}


function rootReducer(state = initialState, { type, payload, price1 , price2 }) {
    switch (type) {


        case GET_PRODUCT: {

            return {
                ...state,

                product: payload,
                allProducts2: payload,

            }

        }

        case GET_PRODUCT_BY_NAME: {
            return {
                ...state,
                product: payload,
            }
        }
        case FILTER_PRICE_BY_RANGE:{
            console.log("Soy reducer", price1, price2)
            const products = state.product
            let filterPrice = products.filter(el => (el.price) >= price1 && el.price <= price2)
            console.log("soy filtrados", filterPrice)
            return {
                ...state,
                product: filterPrice
            }
        }
        default: {
            return state
        }

    }
}

export default rootReducer;