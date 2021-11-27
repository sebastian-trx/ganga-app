import { GET_PRODUCT, GET_PRODUCT_BY_NAME, GET_USER } from '../Actions/const'

const initialState = {
    product: [],
    allProducts2: [],
    user:[],

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

        case GET_USER:{
            return {
                ...state,
                user: payload.data
            }
            
        }
        
        default: {
            return state
        }

    }
}

export default rootReducer;