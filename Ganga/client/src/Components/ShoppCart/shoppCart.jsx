import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CountInput from "./counterInput.jsx";
import {
  getUserInfoGoogle,
  /*deleteItem, decreseProduct,*/
} from "../Redux/Actions/actions";
import { ClearCart } from "./clearCart.jsx";
import { DeleteItem } from "./deleteItem.jsx";
import { MercadoPago } from "../MercadoPago/mercadoPago.jsx";
// import { SuccessLogicMp } from "../MercadoPago/successLogicMp.jsx";
import Nav from "../Nav/NavBar/nav.jsx";

export default function ShoppCart() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfoGoogle());
  }, [dispatch]);

  const User = useSelector((state) => state.getInfoGoogle);
  const cart = User.Cart;
  // let flag = false;
  let prod = 0;
  // desc = 0,
  // envio = 0,
  // subtotal = 0,
  // total = 0;
  // console.log("carrito",cart)

  // useEffect(() => {
  //   dispatch(getUserInfoGoogle());
  //   console.log('holi')
  // });

  return (
    <div>
      <Nav />
      <div class="flex justify-center my-6">
        <div class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
          <div class="flex-1">
            <th class="w-full text-sm lg:text-base" cellspacing="0">
              <button class="flex justify-center w-full px-4 py-2 font-medium text-white uppercase bg-red-600 rounded-full shadow item-center hover:bg-red-500 focus:shadow-outline focus:outline-none">
                <svg
                  aria-hidden="true"
                  data-prefix="far"
                  data-icon="trash-alt"
                  class="inline w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M268 416h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12zM432 80h-82.41l-34-56.7A48 48 0 00274.41 0H173.59a48 48 0 00-41.16 23.3L98.41 80H16A16 16 0 000 96v16a16 16 0 0016 16h16v336a48 48 0 0048 48h288a48 48 0 0048-48V128h16a16 16 0 0016-16V96a16 16 0 00-16-16zM171.84 50.91A6 6 0 01177 48h94a6 6 0 015.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12z"
                  />
                </svg>
                <span class="ml-2 mt-5px">
                  <ClearCart idUser={User.id} />
                </span>
              </button>
            </th>
            <table class="w-full text-sm lg:text-base" cellspacing="0">
              <thead>
                <tr class="h-12 uppercase">
                  <th class="hidden md:table-cell">
                  </th>
                  <th class="text-left">Producto</th>
                  <th class="lg:text-right text-left pl-5 lg:pl-0">
                    <span class="lg:hidden" title="Quantity">
                      Cant
                    </span>
                    <span class="hidden lg:inline">Cantidad</span>
                  </th>
                  <th class="hidden text-right md:table-cell">Precio</th>
                  <th class="text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {/* LA ETIQUETA DE AQUI ABAJO DEBERIAMOS MAPEAR PARA MOSTRAR LOS ITEMS DEL CARRITO */}
                {cart?.length !== 0
                  ? cart?.map((el) => (
                    <tr key={el.id}>
                      <td class="hidden pb-4 md:table-cell">
                        <Link to={`/${el.id}`}>
                          <img
                            src={el.image}
                            class="w-20 rounded"
                            alt="Thumbnail"
                          />
                        </Link>
                      </td>
                      <td>
                        <Link to={`/${el.id}`}>
                          <p class="mb-2 md:ml-4">{el.name}</p>
                        </Link>
                        <DeleteItem
                          idUser={User.id}
                          idProd={el.id}
                          quantP={el.quantity}
                        />
                      </td>
                      <td class="justify-center md:justify-end md:flex mt-6">
                        <div class="w-20 h-10">
                          <div class="relative flex flex-row w-full h-8">
                            <CountInput
                              idUser={User.id}
                              idProd={el.id}
                              quantP={el.quantity}
                              stock={el.stock}
                            />
                          </div>
                        </div>
                      </td>
                      <td class="hidden text-right md:table-cell">
                        <span class="text-sm lg:text-base font-medium">
                          $ {el.price}
                        </span>
                      </td>
                      <td class="text-right">
                        <span class="text-sm lg:text-base font-medium">
                          {prod = el.price * el.quantity}
                        </span>
                      </td>
                    </tr>
                  ))
                  :
                  <tr>
                    <td class="hidden pb-4 md:table-cell">
                    </td>
                    <td>
                      <p class="mb-2 md:ml-4">NO SE HAN AÑADIDO ARTICULOS AL CARRITO</p>
                    </td>
                    <td class="justify-center md:justify-end md:flex mt-6">
                      <div class="w-20 h-10">
                        <div class="relative flex flex-row w-full h-8">
                        </div>
                      </div>
                    </td>
                    <td class="hidden text-right md:table-cell">
                    </td>
                    <td class="text-right">
                    </td>
                  </tr>
                }
              </tbody>
            </table>
            <div class="my-4 mt-6 -mx-2 lg:flex">

              <div class="lg:px-2 lg:w-full">
                <div class="p-4 bg-gray-100 rounded-full">
                  <h1 class="ml-2 font-bold uppercase text-center">
                    Detalle de la Orden
                  </h1>
                </div>
                <div class="p-4">

                  <div class="flex justify-between pt-4 border-b">
                    <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Total
                    </div>
                    <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      {/* total = subtotal + envio */}$ {prod}
                    </div>
                  </div>
                  <button class="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                    <svg
                      aria-hidden="true"
                      data-prefix="far"
                      data-icon="credit-card"
                      class="w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                      />
                    </svg>
                    <span class="ml-2 mt-5px">
                      <MercadoPago cart={cart} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}