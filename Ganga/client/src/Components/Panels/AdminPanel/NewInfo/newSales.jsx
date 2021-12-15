import React from "react";
// import { Link } from "react-router-dom";
import s from "../admin.module.css";

export default function NewSales({ today, orders, users, verOrdenes, ordenes }) {

  const togglE = () => {
    verOrdenes((ordenes = true));
  };

  const sales = orders?.map((o) => {
    let vendedor = "";
    if (o.productInfo[0].owner === null) {
      vendedor = "GanGa";
    } else {
      let Vendedor = o.productInfo[0].owner;
      vendedor = users.filter((u) => u.id === Vendedor);
      vendedor = vendedor[0].name + " " + vendedor[0].surname;
    }
    return {
      fecha: o.createdAt.slice(8, 10),
      usuario: users.filter((u) => u.id === o.userId),
      products: o.productInfo.map((p) => p.quantity),
      total: o.total,
      owner: vendedor // modifique
    };
  });

  let Sales = sales.filter(s => s.fecha === today);
  let transacciones = Sales.map(s => {
    return {
      total: s.total,
      productos: s.products.reduce((a, b) => a + b, 0),
      usuario: s.usuario[0].name + " " + s.usuario[0].surname,
      vendedor: s.vendedor
    }
  })


  return (
    <div className={s.newSalesContainer}>
      <div className="py-5 text-center">
        <h3 className="text-2xl"> Ultimas transacciones</h3>
      </div>
      <table className={s.newSale}>
        <tr>
          <th className="h-10">
            <span>Usuario</span>
          </th>
          <th className="h-10">
            <span>Vendedor</span>
          </th>
          <th>
            <span>Productos comprados</span>
          </th>
          <th>
            <span>Total</span>
          </th>
        </tr>
        {transacciones.map(t => {
          return (
            <>
              <tr className={s.sale}>
                <td className="h-10">
                  <span>{t.usuario}</span>
                  <button className="w-10 h-1" onClick={togglE}>_________________________________________
                  </button>
                </td>
                <td className="h-10">
                  <span>{t.vendedor}</span>
                  <button className="w-10 h-1" onClick={togglE}>_____________________________________________
                  </button>
                </td>
                <td className="h-10">
                  <span> {t.productos} </span>
                  <button className="w-10 h-1" onClick={togglE}>___________________________________
                  </button>
                </td>
                <td className="h-10">
                  <span> $ {t.total}</span>
                </td>
              </tr>
            </>
          )
        })
        }
      </table>
    </div>
  );
}