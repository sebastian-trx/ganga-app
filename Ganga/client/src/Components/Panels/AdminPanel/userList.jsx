import React from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import  NewUsersChart from "./aCharts/NewUsers";
import s from "./admin.module.css";

export default function UserList() {
  const columns = [
    { field: "id", headerName: "ID", width: 140 },
    { field: "Nombre", headerName: "Nombre", width: 130 },
    { field: "Apellido", headerName: "Apellido", width: 160 },
    { field: "Correo", headerName: "Correo", width: 150 },
    {
      field: "Compras",
      headerName: "Compras hechas",
      type: "number",
      width: 150,
    },
    {
      field: "action",
      headerName: "Acción",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button> modificar /</button>
            </Link>
            <button onClick> / eliminar </button>
          </>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      Apellido: "Snow",
      Nombre: "Jon",
      Correo: "gameOfThron@gmail.com",
      Compras: 2,
    },
    {
      id: 2,
      Apellido: "Lannister",
      Nombre: "Cersei",
      Correo: "gameOfThron@gmail.com",
      Compras: 3,
    },
    {
      id: 3,
      Apellido: "Lannister",
      Nombre: "Jaime",
      Correo: "gameOfThron@gmail.com",
      Compras: 1,
    },
    {
      id: 4,
      Apellido: "Stark",
      Nombre: "Arya",
      Correo: "gameOfThron@gmail.com",
      Compras: 0,
    },
    {
      id: 5,
      Apellido: "Targaryen",
      Nombre: "Daenerys",
      Correo: "gameOfThron@gmail.com",
      Compras: 0,
    },
    {
      id: 6,
      Apellido: "Melisandre",
      Nombre: "Gomez",
      Correo: "gameOfThron@gmail.com",
      Compras: 1,
    },
    {
      id: 7,
      Apellido: "Clifford",
      Nombre: "Ferrara",
      Correo: "gameOfThron@gmail.com",
      Compras: 3,
    },
    {
      id: 8,
      Apellido: "Frances",
      Nombre: "Rossini",
      Correo: "gameOfThron@gmail.com",
      Compras: 2,
    },
    {
      id: 9,
      Apellido: "Roxie",
      Nombre: "Harvey",
      Correo: "gameOfThron@gmail.com",
      Compras: 5,
    },
  ];

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
