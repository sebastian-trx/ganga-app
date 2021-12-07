import {
  GET_PRODUCT,
  GET_INFO_GOOGLE,
  LOCAL_LOGIN,
  GET_PRODUCT_BY_NAME,
  SIGNUP,
  FILTER_PRICE_BY_RANGE,
  ORDER_BY_PRICE,
  GET_USER,
  GET_CATEGORIES,
  GET_DETAIL_PRODUCT,
  FILTER_BY_SEARCH,
  USER_MESSAGE,
  GET_SUBCATEGORIES,
  GET_ALL_USERS,
  FILTER_BY_SUB_CATEGORY,
  GET_FILTER_BY_CATEGORY,
  GET_SUB_CAT_BY_NAME,
  PRODUCTS_BY_NAME
} from "../Actions/const";

const initialState = {
  product: [],
  allProducts2: [],
  getInfoGoogle: [],
  user: [],
  allUsers: [],
  categories: [],
  detailProduct: [],
  subcategories: [],
};

function rootReducer(state = initialState, { type, payload, price1, price2 }) {
  switch (type) {
    case GET_PRODUCT: {
      return {
        ...state,
        allProducts2: payload,
        product: payload,
      };
    }
    case GET_PRODUCT_BY_NAME: {
      return {
        ...state,
        product: payload,
      };
    }
    case GET_USER: {
      return {
        ...state,
        user: payload.data,
      };
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
    case SIGNUP:
      return {
        ...state,
      };
    case FILTER_PRICE_BY_RANGE: {
      const products = state.product;
      let filterPrice = products.filter(
        (el) => el.price >= price1 && el.price <= price2
      );
      return {
        ...state,
        product: filterPrice,
      };
    }
    case ORDER_BY_PRICE: {
      let sortedProducts =
        payload === "Mayor-Menor"
          ? state.product.sort(function (a, b) {
            if (a.price > b.price) {
              return 1;
            } else if (b.price > a.price) {
              return -1;
            }
            return 0;
          })
          : state.product.sort(function (a, b) {
            if (a.price > b.price) {
              return -1;
            } else if (a.price > b.price) {
              return 1;
            }
            return 0;
          });
      return {
        ...state,
        product: payload === "All" ? state.products : sortedProducts,
      };
    }
    case GET_CATEGORIES: {
      return {
        ...state,
        categories: payload,
      };
    }
    case GET_DETAIL_PRODUCT:
      return {
        ...state,
        detailProduct: payload,
      };
    case FILTER_BY_SEARCH:
      let resultado = state.product.filter(
        (el) =>
          el.name.toLowerCase().includes(payload.toLowerCase()) ||
          el.categories.toLowerCase().includes(payload.toLowerCase())
      );

      return {
        ...state,
        product: resultado,
      };
    case USER_MESSAGE:
      return {
        ...state,
      };
    case GET_SUBCATEGORIES:
      let subcatego = state.categories.filter((el) => el.id === payload)
      return {
        ...state,
        subcategories: subcatego
      }
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: payload
      }
    case GET_FILTER_BY_CATEGORY:
      console.log(payload, "ljdwboubdlwnb")
      let filter = state.allProducts2.filter((el) => (el.categories === payload))
      return {
        ...state,
        product: filter
      }

    case FILTER_BY_SUB_CATEGORY:
      let filter2 = state.allProducts2.filter((el) => el.subcategories[0] === payload)
      return {
       ...state,
       product: filter2
      }

    case GET_SUB_CAT_BY_NAME:
      let filter3 = state.categories.filter((el) => (el.name === payload))
      return {
        ...state,
        subcategories: filter3
      }
      case PRODUCTS_BY_NAME:
        let filter4 = state.allProducts2.filter((el) => (el.name.toLowerCase()).includes(payload.toLowerCase()))
        return{
          ...state,
          product: filter4
        }
    default: {
      return state;
    }
  }
}

export default rootReducer;
