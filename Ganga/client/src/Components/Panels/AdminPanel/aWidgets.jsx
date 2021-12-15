import React from "react";
import s from "./admin.module.css";

export default function AdminWidgets({ sales, products, users, today, productos }) {

  productos = productos.filter(p => p.approved = true);
  productos = productos.length;

  let promedioS = sales / today;
  promedioS = promedioS.toString().slice(0, 8);
  let promedioP = products / today;
  promedioP = promedioP.toString().slice(0, 5);
  let promedioU = users / today;
  promedioU = promedioU.toString().slice(0, 4);
  let promedioN = productos / today;
  promedioN = promedioN.toString().slice(0, 5);

  return (
    <div className={s.widgets}>
      <div className={s.widgetBox}>
        <div className="pb-3">
          <span className="text-xl opacity-90">Ventas</span>
        </div>
        <span className="text-3xl">${sales}</span>
        <div className="pt-5">
          <span className="text-base opacity-80"> ${promedioS}</span>
        </div>
        <span className="text-xs opacity-70">*promedio x día</span>
      </div>
      <div className={s.widgetBox}>
        <div className="pb-2">
          <span className="text-xl opacity-90">Productos</span> <hr className="border-0" />
          <span className="text-xs opacity-70">vendidos</span>
        </div>
        <div>
          <span className="text-2xl">{products}</span>
        </div>
        <div className="pt-2">
          <span className="text-base">{promedioP}</span>
        </div>
        <span className="text-xs opacity-70">*promedio x día</span>
      </div>
      <div className={s.widgetBox}>
        <div className="pb-2">
          <span className="text-xl opacity-90">Productos</span> <hr className="border-0" />
          <span className="text-xs opacity-70">en Oferta</span>
        </div>
        <div>
          <span className="text-2xl">{productos}</span>
        </div>
        <div className="pt-2">
          <span className="text-base">{promedioN}</span>
        </div>
        <span className="text-xs opacity-70">*promedio x día</span>
      </div>
      <div className={s.widgetBox}>
        <div className="pb-3">
          <span className="text-xl opacity-90">Usuarios nuevos</span>
        </div>
        <span className="text-3xl">{users}</span>
        <div className="pt-5">
          <span className="text-base opacity-80">{promedioU}</span>
        </div>
        <span className="text-xs opacity-70">*promedio x día</span>
      </div>
    </div>
  );
}