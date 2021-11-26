import React from "react";
import { Link } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import { ImSearch } from "react-icons/im";

import Logo from "../Logo/logo";
import Marca from "../Brands/brands";
import Categoria from "../Categories/categories";
import BuscarProducto from '../Search/search';
import Carrito from "../Cart/cart";
import Catalog from "../Catalog/catalog";
import User from "../User/user";

export default function Nav() {

  function handleSubmit() { }

  function handleInput() { }

  return (
    <div>
      <nav className="flex justify-between items-center h-14  text-black">
        <Link to="/" className="pl-10">
          <div className=" w-16">
            <Logo />
          </div>
        </Link>

        <div>
          <Marca />
        </div>

        <div className="pr-10">
          <Link to="/catalogo" className="px-6">
            <span>
              <Categoria />
            </span>
          </Link>

          <Link to="/catalogo" className="px-6">
            <span>
              <Catalog />
            </span>
          </Link>

          <Link to="/" className="px-6">
            <span>nosotros</span>
          </Link>

          <Link to="/" className="pl-6 pr-8">
            <span>contacto</span>
          </Link>

          <input type="text" onChange={handleInput} className="bg-gray-300 pt-1 ml-10 h-8 border-gray-500 border-l-2 border-t-2 border-b-2" />
          <button type="submit" onClick={handleSubmit} className=" px-1  h-8 bg-gray-300 mr-4 mb-1 border-gray-500 border-r-2 border-t-2 border-b-2">
            <ImSearch />
          </button>

          <div>
            <BuscarProducto />
          </div>

          <Link to="/carrito" className=" pl-6 pr-10">
            <button>
              <IoIosCart />

              <Carrito />

            </button>
          </Link>

          <User />

        </div>
      </nav>
    </div>
  );
}
