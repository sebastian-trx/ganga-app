import { GET_PRODUCT, GET_INFO_GOOGLE, LOCAL_LOGIN } from "../Actions/const";

const initialState = {
  allProduct: [],
  allProducts2: [],
  getInfoGoogle: [],
};

function rootReducer(state = initialState, action) {
  switch (action) {
    case GET_PRODUCT: {
      return {
        ...state,
        allProduct: action.payload,
        allProducts2: action.payload,
      };
    }
    case GET_INFO_GOOGLE:
      return {
        ...state,
        getInfoGoogle: action.payload,
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
