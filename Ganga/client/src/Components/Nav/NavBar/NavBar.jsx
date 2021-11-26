import React from "react";
import { Link } from "react-router-dom";
import Logo from '../Logo/logo';
import Marca from "../Brands/brands";
import Categoria from '../Categories/categories';
import BuscarProducto from '../Search/search';
import Carrito from "../Cart/cart";
import Catalog from "../Catalog/catalog";
import a from './NavBar.module.css'


export default function Nav() {
  return (
    <div ClassName={a.nav}>
      <div ><Logo/></div>
      <div className={a.centrado}>
      <div><Marca/></div>
      <div><Categoria /></div>
      <div><Link to='/catalog' component={Catalog}>Catalogo</Link></div>
      <div><Link to="">Nosotros</Link></div>
      <div><Link to="">Contacto</Link></div>
      </div>
      <div className={a.izq}>
      <div><BuscarProducto /></div>
      <div> <Carrito /></div>
      </div>
    </div>
  );
}
