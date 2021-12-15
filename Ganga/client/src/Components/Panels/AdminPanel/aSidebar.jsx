import React from "react";
import s from "./admin.module.css";

export default function AdminSidebar({
  usuarios,
  verUsuarios,
  productos,
  verProductos,
  vendedores,
  verVendedores,
  ordenes,
  verOrdenes,
  productosNuevos,
  verProductosNuevos
}) {
  const toggle = () => {
    verUsuarios((usuarios = true));
    verProductos((productos = false));
    verVendedores((vendedores = false));
    verOrdenes((ordenes = false));
    verProductosNuevos((productosNuevos = false));
  };

  const Toggle = () => {
    verProductos((productos = true));
    verUsuarios((usuarios = false));
    verVendedores((vendedores = false));
    verOrdenes((ordenes = false));
    verProductosNuevos((productosNuevos = false));
  };

  const togle = () => {
    verVendedores((vendedores = true));
    verUsuarios((usuarios = false));
    verProductos((productos = false));
    verOrdenes((ordenes = false));
    verProductosNuevos((productosNuevos = false));
  };

  const Togle = () => {
    verVendedores((vendedores = false));
    verProductos((productos = false));
    verUsuarios((usuarios = false));
    verOrdenes((ordenes = false));
    verProductosNuevos((productosNuevos = false));
  };

  const togglE = () => {
    verVendedores((vendedores = false));
    verProductos((productos = false));
    verUsuarios((usuarios = false));
    verOrdenes((ordenes = true));
    verProductosNuevos((productosNuevos = false));
  };

  const TogglE = () => {
    verVendedores((vendedores = false));
    verProductos((productos = false));
    verUsuarios((usuarios = false));
    verOrdenes((ordenes = false));
    verProductosNuevos((productosNuevos = true));
  };

  return (
    <div className={s.sidebar}>
      <h3 className="p-10 pt-32 pl-16 text-3xl opacity-60">Opciones</h3>
      <ul>
        <li className="p-8 pr-48 text-xl hover:bg-gray-400">
          <button onClick={Togle}>Datos</button>
        </li>
        <li className="p-8 text-xl hover:bg-gray-400">
          <button onClick={toggle}>Usuarios</button>
        </li>
        <li className="p-8 text-xl hover:bg-gray-400">
          <button onClick={Toggle}>Productos</button>
        </li>
        <li className="p-8 text-xl hover:bg-gray-400">
          <button onClick={togle}>Vendedores</button>
        </li>
        <li className="p-8 text-xl hover:bg-gray-400">
          <button onClick={togglE}>Ventas</button>
        </li>
        <li className="p-8 text-xl hover:bg-gray-400">
          <button onClick={TogglE}>Autorizaciónes</button>
        </li>
      </ul>
    </div>
  );
}