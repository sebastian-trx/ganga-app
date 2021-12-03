import React from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { TiDeleteOutline } from "react-icons/ti";

import  NewUsersChart from "./aCharts/NewUsers";
import s from "./admin.module.css";

export default function UserList({users}) {
  const columns = [
    { field: "id", headerName: "ID", width: 140 },
    { field: "Nombre", headerName: "Nombre", width: 130 },
    { field: "Apellido", headerName: "Apellido", width: 160 },
    { field: "Correo", headerName: "Correo", width: 150 },
    { field: "Fecha", headerName: "Fecha de Nacimiento", type: "number", width: 150},
    { field: "Dirección", headerName: "Zona", width: 150 },
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
            <button onClick> <TiDeleteOutline className={s.delete}/></button>
          </>
        );
      },
    },
  ];

  const rows = users.map((u) => {
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
      <h4 className="text-5xl text-center font-light pt-10 pb-12">Usuarios</h4>
      <Link to="/registrarme">
        <button className="absolute top-40 right-10 rounded-3xl bg-gray-300 hover:bg-gray-400 p-3">
          Crear
        </button>
      </Link>
      <div className={s.listaUsuarios}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
     <NewUsersChart/>
    </div>
  );
}
