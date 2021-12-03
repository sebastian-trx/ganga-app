import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";

import RevenueChart from "./aCharts/Revenue";
import s from "./admin.module.css";

export default function VendorList({vendors}) {
  const columns = [
    { field: "id", headerName: "ID", width: 140 },
    { field: "Nombre", headerName: "Nombre", width: 130 },
    { field: "Apellido", headerName: "Apellido", width: 160 },
    { field: "Correo", headerName: "Correo", width: 150 },
    //{ field: "Productos", headerName: "Variedad de productos", type: "number", width: 150,},
    //{ field: "Stock", headerName: "stock", type: "number", width: 150 },
    {
      field: "action",
      headerName: "Acción",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
            <button className={s.editar}> edit </button>
            </Link>
            <button onClick> <TiDeleteOutline className={s.delete}/> </button>
          </>
        );
      },
    },
  ];

  const rows = vendors.map((u) => {
    return {
      id: u.id,
      Nombre:u.name,
      Apellido: u.lastname,
      Correo: u.mail,
      Fecha: u.birthdate,
      Dirección: u.address
    }
  })

  return (
    <div >
      <h4 className="text-5xl text-center font-light pt-10 pb-12">Vendedores</h4>
      <Link to="/registrarme">
        <button className="absolute top-40 right-10 rounded-3xl bg-gray-300 hover:bg-gray-400 p-3">
          Crear
        </button>
      </Link>
      <div className={s.listaVendedores}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
      <RevenueChart/>
    </div>
  );
}
