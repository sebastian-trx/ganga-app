import React, { useState } from "react";
import {Link} from "react-router-dom";

import Nav from "../../Nav/NavBar/nav";
import AdminSidebar from "./aSidebar";
import AdminWidgets from "./aWidgets";
import ActiveUsers from "./aCharts/ActiveUsers";
import UserList from "./userList";
import BrandNewUsers from "./NewInfo/brandNewUsers";
import NewSales from "./NewInfo/newSales";
import ProductList from "./productList";
import VendorList from "./vendorList";
import s from "./admin.module.css";

export default function AdminPanel() {
  const [usuarios, verUsuarios] = useState(false);
  const [productos, verProductos] = useState(false);
  const [vendedores, verVendedores] = useState(false);

  return (
    <div className="bg-gray-100">
      <Nav />
      {!vendedores ? 
      <div>
      {!productos ?
      <div>
      {!usuarios ? (
        <div className={s.container}>
          <div>
            <AdminSidebar usuarios={usuarios} verUsuarios={verUsuarios} productos={productos} 
            verProductos={verProductos} vendedores={vendedores} verVendedores={verVendedores} />
          </div>
          <div className={s.body}>
            <h4 className="text-3xl text-center font-light font-serif p-5">
              Info del Mes
            </h4>
            <AdminWidgets />
            <ActiveUsers />
            <div className={s.newInfo}>
              <BrandNewUsers/>
              <NewSales />
            </div>
          </div>
        </div>
      ) : (
        <div className={s.containerUsuarios}>
        <div>
            <AdminSidebar usuarios={usuarios} verUsuarios={verUsuarios} productos={productos} 
            verProductos={verProductos} vendedores={vendedores} verVendedores={verVendedores} />
          </div>
          <div className={s.usuariosBody}>
            <UserList />
          </div>
        </div>
      )} 
      </div> 
      : 
      <div  className={s.containerProductos}>
      <div>
            <AdminSidebar usuarios={usuarios} verUsuarios={verUsuarios} productos={productos} 
            verProductos={verProductos} vendedores={vendedores} verVendedores={verVendedores} />
          </div>
          <div className={s.productosBody}>
      <ProductList/> 
          </div>
      </div>
      }
      </div>
      : 
      <div  className={s.containerVendedores}>
      <div>
            <AdminSidebar usuarios={usuarios} verUsuarios={verUsuarios} productos={productos} 
            verProductos={verProductos} vendedores={vendedores} verVendedores={verVendedores} />
          </div>
      <div className={s.vendedoresBody}>
        <VendorList/>
      </div>
      </div>}
    </div>
  );
}
