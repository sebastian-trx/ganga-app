import React /*, { useEffect, useState }*/ from "react";
import { useDispatch } from "react-redux";
import { clearCart/*, getUserInfoGoogle */} from "../Redux/Actions/actions";

export function ClearCart({ idUser }) {
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart(idUser));
    window.location.reload();
  }
  return (
    <div>
      {/* <button onClick={handleClearCart} class="font-bold uppercase mr-2 mt-1 lg:mt-2">
                        <svg
                          aria-hidden="true"
                          data-prefix="far"
                          data-icon="trash-alt"
                          class="display w-4 text-red-600 hover:text-red-800"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="currentColor"
                            d="M268 416h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12zM432 80h-82.41l-34-56.7A48 48 0 00274.41 0H173.59a48 48 0 00-41.16 23.3L98.41 80H16A16 16 0 000 96v16a16 16 0 0016 16h16v336a48 48 0 0048 48h288a48 48 0 0048-48V128h16a16 16 0 0016-16V96a16 16 0 00-16-16zM171.84 50.91A6 6 0 01177 48h94a6 6 0 015.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12z"
                          />
                        </svg>
                        <span class="ml-2 mt-5px">Vaciar Carrito</span>
                      </button> */}
      <button class="font-bold uppercase" onClick={handleClearCart}>Vaciar Carrito</button>
    </div>
  );
}
