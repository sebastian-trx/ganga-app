import React from "react";
import s from "../admin.module.css";

export default function NewSales() {
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
          <th>
            <span>Producto</span>
          </th>
          <th>
            <span>Precio</span>
          </th>
          <th>
            <span>Fecha</span>
          </th>
        </tr>
        <tr className={s.sale}>
          <td className="h-10">
            <span>Hugo Pumpido</span>
          </td>
          <td className="pb-4">
            <span> Guantes </span>
          </td>
          <td className="pb-4">
            <span> $2500</span>
          </td>
          <td className="pb-4">
            <span>3/12/2021</span>
          </td>
        </tr>
        <tr className={s.sale}>
          <td className="pb-4">
            <span>Hugo Pumpido</span>
          </td>
          <td className="pb-4">
            <span> Guantes </span>
          </td>
          <td className="pb-4">
            <span> $2500</span>
          </td>
          <td className="pb-4">
            <span>3/12/2021</span>
          </td>
        </tr>
        <tr className={s.sale}>
          <td className="pb-4">
            <span>Hugo Pumpido</span>
          </td>
          <td className="pb-4">
            <span> Guantes </span>
          </td>
          <td className="pb-4">
            <span> $2500</span>
          </td>
          <td className="pb-4">
            <span>3/12/2021</span>
          </td>
        </tr>
        <tr className={s.sale}>
          <td className="pb-4">
            <span>Hugo Pumpido</span>
          </td>
          <td className="pb-4">
            <span> Guantes </span>
          </td>
          <td className="pb-4">
            <span> $2500</span>
          </td>
          <td className="pb-4">
            <span>3/12/2021</span>
          </td>
        </tr>
        <tr className={s.sale}>
          <td className="pb-4">
            <span>Hugo Pumpido</span>
          </td>
          <td className="pb-4">
            <span> Guantes </span>
          </td>
          <td className="pb-4">
            <span> $2500</span>
          </td>
          <td className="pb-4">
            <span>3/12/2021</span>
          </td>
        </tr>
      </table>
    </div>
  );
}
