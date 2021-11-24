import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/logo";
import Marca from "../Brands/brands";
import Categoria from "../Categorias/categorias";
import Buscar from "../Buscar/buscar";
import Carrito from "../Cart/cart";
import Catalago from "../Catalog/catalog";


export default function Nav() {
  return (
    <div>
      <div >
        <Logo />
      </div>
      <div>
        <Marca />
        <Categoria />
        <Catalago />
        <Link to="">Nosotros</Link>
        <Link to="">Contacto</Link>
      </div>
      <div>
        <Buscar />
        <Carrito />
      </div>
    </div>
  );
}
