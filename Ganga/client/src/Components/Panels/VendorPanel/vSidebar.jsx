<<<<<<< Updated upstream
import React from 'react';
import s from './vendor.module.css';

export default function VendorSidebar({productos, verProductos}) {

    const toggle = () => {
        verProductos((productos = true));
      };

      const Toggle = () => {
        verProductos((productos = false));
      };

    return (
        <div className={s.sidebar}>
            <h3 className="p-10 pt-32 pl-16 text-3xl opacity-60">opciones</h3>
            <ul>
                <li className="p-8 pr-48 text-xl hover:bg-gray-400">
                    <button onClick={Toggle}>Datos</button>
                </li>
                <li className="p-8 pr-48 text-xl hover:bg-gray-400">
                    <button onClick={toggle}>Mis Productos</button>
                </li>
            </ul>
        </div>
    )
=======
import React from "react";
import s from "./vSidebar.module.css";

export default function VendedorSidebar({
  usuarios,
  verUsuarios,
  productos,
  verProductos,
  vendedores,
  verVendedores,
}) {
  const toggle = () => {
    verUsuarios((usuarios = true));
    verProductos((productos = false));
    verVendedores((vendedores = false));
  };

  const Toggle = () => {
    verProductos((productos = true));
    verUsuarios((usuarios = false));
    verVendedores((vendedores = false));
  };

  const togle = () => {
    verVendedores((vendedores = true));
    verUsuarios((usuarios = false));
    verProductos((productos = false));
  };

  const Togle = () => {
    verVendedores((vendedores = false));
    verProductos((productos = false));
    verUsuarios((usuarios = false));
  };

  return (
    <div className={s.sidebar}>
      <div className="">
        <h3 className="p-10 pt-32 pl-16 text-3xl opacity-60">Opciones</h3>
        <ul>
          <li className="p-8 pr-48 text-xl hover:bg-gray-400 active:bg-gray-500">
            <button onClick={Togle}>Tus Datos</button>
          </li>
          <li className="p-8 text-xl hover:bg-gray-400 active:bg-gray-500">
            <button onClick={toggle}>Tus Productos</button>
          </li>
          <li className="p-8 text-xl hover:bg-gray-400 active:bg-gray-500">
            <button onClick={Toggle}>Tus Ventas</button>
          </li>
          <li className="p-8 text-xl hover:bg-gray-400 active:bg-gray-500">
            <button onClick={togle}>Otro</button>
          </li>
        </ul>
      </div>
    </div>
  );
>>>>>>> Stashed changes
}
