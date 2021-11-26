import { GET_PRODUCT, GET_PRODUCT_BY_NAME } from '../Actions/const'

const initialState = {
    product: [],
    allProducts2: [],

}

function rootReducer(state = initialState, {type, payload}) {
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
                product: payload
            }
        }
        
        default: {
            return state
        }

    }
}

export default rootReducer;