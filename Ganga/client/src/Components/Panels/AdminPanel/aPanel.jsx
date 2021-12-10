import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Nav from "../../Nav/NavBar/nav";
import AdminSidebar from "./aSidebar";
import AdminWidgets from "./aWidgets";
import ActiveUsers from "./aCharts/ActiveUsers";
import UserList from "./userList";
import BrandNewUsers from "./NewInfo/brandNewUsers";
import NewSales from "./NewInfo/newSales";
import ProductList from "./productList";
import VendorList from "./vendorList";
import {
  getAllOrders,
  getAllUsers,
  getProduct,
} from "../../Redux/Actions/actions";
import s from "./admin.module.css";
import OrderList from "./orderList";

export default function AdminPanel() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);
  const products = useSelector((state) => state.product);
  const orders = useSelector((state) => state.orders);
  const [usuarios, verUsuarios] = useState(false);
  const [productos, verProductos] = useState(false);
  const [vendedores, verVendedores] = useState(false);
  const [ordenes, verOrdenes] = useState(false);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const vendors = allUsers?.filter((u) => u.seller === true);
  const users = allUsers?.filter((u) => u.seller === false);
  const salesArr = orders.map((o) => o.total);
  let sales = salesArr.reduce((a, b) => a + b, 0);
  const productsArr = orders.map((o) => o.productInfo.map((p) => p.quantity)).flat()
  let productsSold = productsArr.reduce((a, b) => a + b, 0);
  let date = new Date();
  let today = date.toString().slice(8, 10);

  return (
    <div className="bg-gray-100">
      <Nav />
      {!ordenes ? (
        <div>
          {!vendedores ? (
            <div>
              {!productos ? (
                <div>
                  {!usuarios ? (
                    <div className={s.container}>
                      <AdminSidebar
                        usuarios={usuarios}
                        verUsuarios={verUsuarios}
                        productos={productos}
                        verProductos={verProductos}
                        vendedores={vendedores}
                        verVendedores={verVendedores}
                        ordenes={ordenes}
                        verOrdenes={verOrdenes}
                      />
                      <div className={s.body}>
                        <h4 className="text-3xl text-center font-light font-serif p-5">
                          Info del Mes
                        </h4>
                        <AdminWidgets
                          sales={sales}
                          products={productsSold}
                          today={today}
                        />
                        <ActiveUsers />
                        <div className={s.newInfo}>
                          <BrandNewUsers />
                          <NewSales today={today} orders={orders} users={allUsers} />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={s.container}>
                      <AdminSidebar
                        usuarios={usuarios}
                        verUsuarios={verUsuarios}
                        productos={productos}
                        verProductos={verProductos}
                        vendedores={vendedores}
                        verVendedores={verVendedores}
                        ordenes={ordenes}
                        verOrdenes={verOrdenes}
                      />
                      <div className={s.body}>
                        <UserList users={users} />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className={s.container}>
                  <AdminSidebar
                    usuarios={usuarios}
                    verUsuarios={verUsuarios}
                    productos={productos}
                    verProductos={verProductos}
                    vendedores={vendedores}
                    verVendedores={verVendedores}
                    ordenes={ordenes}
                    verOrdenes={verOrdenes}
                  />
                  <div className={s.body}>
                    <ProductList products={products} />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className={s.container}>
              <AdminSidebar
                usuarios={usuarios}
                verUsuarios={verUsuarios}
                productos={productos}
                verProductos={verProductos}
                vendedores={vendedores}
                verVendedores={verVendedores}
                ordenes={ordenes}
                verOrdenes={verOrdenes}
              />
              <div className={s.body}>
                <VendorList vendors={vendors} />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className={s.container}>
          <AdminSidebar
            usuarios={usuarios}
            verUsuarios={verUsuarios}
            productos={productos}
            verProductos={verProductos}
            vendedores={vendedores}
            verVendedores={verVendedores}
            ordenes={ordenes}
            verOrdenes={verOrdenes}
          />
          <div className={s.body}>
            <OrderList orders={orders} users={allUsers} />
          </div>
        </div>
      )}
    </div>
  );
}
