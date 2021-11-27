import { GET_PRODUCT, GET_PRODUCT_BY_NAME, FILTER_PRICE_BY_RANGE, ORDER_BY_PRICE } from '../Actions/const'



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
            const products = state.product
            let filterPrice = products.filter(el => (el.price) >= price1 && el.price <= price2)
            return {
                ...state,
                product: filterPrice
            }
        }

        case ORDER_BY_PRICE:{
            let sortedProducts= payload === 'Mayor-Menor' ?
            state.product.sort(function(a,b){
                if( a.price> b.price){
                    return 1
                } else if (b.price > a.price){
                        return -1
                }
                return 0
            }) : state.product.sort(function(a,b){
                if(a.price > b.price){
                    return -1
                } else if( a.price > b.price){
                    return 1
                }
                return 0
            })
            return{
                ...state,
                product: payload === "All"? state.products : sortedProducts
            }
        }
        default: {
            return state
        }

    }
}

export default rootReducer;