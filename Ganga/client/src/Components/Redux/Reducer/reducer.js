import { GET_PRODUCT, GET_PRODUCT_BY_NAME  } from '../Actions/const'

const initialState = {
    product: [],
    allProducts2: [],

}

function rootReducer(state = initialState, action) {
    switch (action.type) {

        case GET_PRODUCT: {
            return {
                ...state,
                product: action.payload,
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