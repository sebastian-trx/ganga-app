import axios from "axios";

import {
  CLEAR_CART,
  UPDATE_CART,
  PAY_MERCADOPAGO,
  PAY_MERCADOPAGO_URL,
} from "../../constants";

export function clearCart() {
  return {
    type: CLEAR_CART,
  };
}

export function updateCart(products) {
  return {
    type: UPDATE_CART,
    payload: products,
  };
}

export function checkoutMercadoPago(itemsCheckout, idOrden) {
  return function (dispatch) {
    axios
      .post(PAY_MERCADOPAGO_URL, [itemsCheckout, idOrden])
      .then((response) => {
        dispatch({
          type: PAY_MERCADOPAGO,
          payload: response.data,
        });
      });
  };
}
