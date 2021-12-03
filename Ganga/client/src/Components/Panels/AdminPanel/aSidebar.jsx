import React from "react";
import s from "./admin.module.css";

export default function AdminSidebar({
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
        <h3 className="p-10 pt-32 pl-16 text-3xl opacity-60">opciones</h3>
        <ul>
          <li className="p-8 pr-48 text-xl hover:bg-gray-400 active:bg-gray-500">
            <button onClick={Togle}>Datos</button>
          </li>
          <li className="p-8 text-xl hover:bg-gray-400 active:bg-gray-500">
            <button onClick={toggle}>Usuarios</button>
          </li>
          <li className="p-8 text-xl hover:bg-gray-400 active:bg-gray-500">
            <button onClick={Toggle}>Productos</button>
          </li>
          <li className="p-8 text-xl hover:bg-gray-400 active:bg-gray-500">
            <button onClick={togle}>Vendedores</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
