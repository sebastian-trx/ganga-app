import { GET_PRODUCT } from '../Actions/const'

const initialState = {
    allProduct: [],
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

        default: {
            return state
        }

    }
}

export default rootReducer;