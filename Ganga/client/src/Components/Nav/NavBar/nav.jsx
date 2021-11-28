import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import { ImSearch } from "react-icons/im";

import { getUser } from "../../Redux/Actions/actions";
import Logo from "../Logo/logo";

// import Categoria from "../Categories/categories";
// import Catalog from "../Catalog/catalog";
import User from "../User/user";

export default function Nav() {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  const categorias = [

    { Nombre: 'Tecnologia', Id: 1 },
    { Nombre: 'Electrodomesticos', Id: 2 },
    { Nombre: "Deportes", Id: 3 },
    { Nombre: 'Informatica', Id: 4 },
    { Nombre: 'Moda', Id: 5 },
    { Nombre: "Juegos", Id: 6 },
    { Nombre: 'Bebes', Id: 7 },
    { Nombre: 'Repuestos', Id: 8 },
    { Nombre: "Accesorios", Id: 9 },
    { Nombre: 'Decoración', Id: 10 },
    { Nombre: 'Educación', Id: 11 },
    { Nombre: "Niños", Id: 12 },

  ]


  function handleCat(e) {


  }


  function handleSubmit() { }

  function handleInput() { }

  return (
    <div className="z-20">
      <nav className="flex justify-between items-center h-20  text-black z-20">
        <Link to="/" className="pl-10">
          <div className=" w-30">
            <Logo />
          </div>
        </Link>

        <div className="pr-10">
          <span>
            <select className="w-24" onChange={handleCat}>
              <option> Categorias </option>
              <Link to={"/categorias" + 1}>
                {
                  categorias.map(el =>
                  (
                    <option key={el.Id} >
                      {el.Nombre}
                    </option>
                  ))
                }
              </Link>
            </select>
          </span>

          <Link to="/catalogo" className="px-6">
            <span>Catalogo</span>
          </Link>

          <Link to="/" className="px-6">
            <span>Nosotros</span>
          </Link>

          <Link to="/" className="pl-6 pr-8">
            <span>Contacto</span>
          </Link>

          <input
            type="text"
            onChange={handleInput}
            className="bg-gray-300 pt-1 ml-10 h-8 border-gray-500 border-l-2 border-t-2 border-b-2"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className=" px-1  h-8 bg-gray-300 mr-4 mb-1 border-gray-500 border-r-2 border-t-1 border-b-2"
          >
            <ImSearch />
          </button>

          <Link to="/carrito" className="pl-6 pr-10">
            <button>
              <IoIosCart />
            </button>
          </Link>
          {
            user && user.login ?
              <User /> :
              <>
                <Link to="/registrarme" className="pl-4">
                  <span>Crear cuenta</span>
                </Link>

                <Link to="/ingresar" className="pl-4">
                  <span>Iniciar Sesión</span>
                </Link>
              </>
          }

          <User />
        </div>
      </nav>
    </div>
  );
}
