import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearCart, getUserInfoGoogle } from "../Redux/Actions/actions";

export function ClearCart({ idUser }) {
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart(idUser));
    window.location.reload();
  }
  return (
    <div>
      <button onClick={handleClearCart}>Vaciar carrito</button>
    </div>
  );
}
