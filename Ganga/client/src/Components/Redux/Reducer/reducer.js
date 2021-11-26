import { GET_PRODUCT, GET_INFO_GOOGLE, LOCAL_LOGIN } from "../Actions/const";

const initialState = {
  product: [],
  allProducts2: [],
  getInfoGoogle: [],
};

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
