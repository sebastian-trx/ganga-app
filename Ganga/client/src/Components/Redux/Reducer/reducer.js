import { GET_PRODUCT, GET_PRODUCT_BY_NAME } from '../Actions/const'

const initialState = {
    product: [],
    allProducts2: [],

}

function rootReducer(state = initialState, action) {
    switch (action) {

        case GET_PRODUCT: {
            return {
                ...state,
                allProduct: action.payload,
                allProducts2: action.payload,

            }

        }

        case GET_PRODUCT_BY_NAME: {
            return {
                ...state,
                product: action.payload
            }
        }
        
        default: {
            return state
        }

    }
}

export default rootReducer;