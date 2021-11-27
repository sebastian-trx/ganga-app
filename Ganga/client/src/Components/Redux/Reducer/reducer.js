<<<<<<< HEAD
import { GET_PRODUCT, GET_PRODUCT_BY_NAME, GET_USER } from '../Actions/const'

const initialState = {
    product: [],
    allProducts2: [],
    user:[],

}
=======
import { GET_PRODUCT, GET_INFO_GOOGLE, LOCAL_LOGIN } from "../Actions/const";

const initialState = {
  product: [],
  allProducts2: [],
  getInfoGoogle: [],
};
>>>>>>> 3aae4c7f9f8046097882bddbb81cada63d6319f6

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
<<<<<<< HEAD

        case GET_USER:{
            return {
                ...state,
                user: payload.data
            }
            
        }
        
        default: {
            return state
        }
=======
>>>>>>> 3aae4c7f9f8046097882bddbb81cada63d6319f6

    case GET_INFO_GOOGLE:
      return {
        ...state,
        getInfoGoogle: payload,
      };
    case LOCAL_LOGIN:
      return {
        ...state,
      };
    default: {
      return state;
    }
  }
}

export default rootReducer;
