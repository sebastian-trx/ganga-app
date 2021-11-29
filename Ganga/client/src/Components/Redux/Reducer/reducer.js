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
  GET_DETAIL_PRODUCT
} from "../Actions/const";

const initialState = {
  product: [],
  allProducts2: [],
  getInfoGoogle: [],
  user:[],
  categories:[],
  detailProduct:[],
};

function rootReducer(state = initialState, { type, payload, price1 , price2 }) {
  switch (type) {
    case GET_PRODUCT: {
      return {
        ...state,
        product: payload,
        allProducts2: payload,
      };
    }
    case GET_PRODUCT_BY_NAME: {
      return {
        ...state,
        product: payload,
      };
    }
    case GET_USER:{
      return {
        ...state,
        user: payload.data
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
    case SIGNUP:
      return {
        ...state,
      };
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
     case GET_CATEGORIES:{
      return {
        ...state,
        categories: payload
      }        
    }
     case GET_DETAIL_PRODUCT:
         return{
             ...state,
             detailProduct:payload
         }
    default: {
      return state;
    }
  }
}

export default rootReducer;
