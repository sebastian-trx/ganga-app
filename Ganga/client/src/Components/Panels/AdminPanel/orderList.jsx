import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
import s from "./admin.module.css";

export default function OrderList({orders, users}) {

    
    for (var i = 0; i < orders.length; i++) {
        for (var j = 0; j < orders[i].productInfo.length; j++) {
            orders[i].productInfo[j].date = orders[i].createdAt.slice(0,10)
            orders[i].productInfo[j].total = orders[i].productInfo[j].quantity * orders[i].productInfo[j].price
            orders[i].productInfo[j].user = users.filter(u => u.id === orders[i].userId);
        }
    }
    
let sales = orders.map(o => o.productInfo).flat();


console.log(sales, "s")

  const columns = [
    { field: "id", headerName: "id", width: 30 },
    { field: "Usuario", headerName: "Usuario", width: 130 },
    { field: "Vendedor", headerName: "Vendedor", width: 130 },
    { field: "Producto", headerName: "Producto", width: 160 },
    { field: "Cantidad", headerName: "Cantidad", type: "number", width: 90 },
    { field: "Total", headerName: "Total", type: "number", width: 150,},
    { field: "Fecha", headerName: "Fecha", type: "number", width: 150 },
  ];

  const rows = sales?.map((s) => {
    return {
      Usuario: s.user[0].name + " " + s.user[0].surname,
      Vendedor: s.owner,
      Producto: s.name,
      Cantidad: s.quantity,
      Total: s.total,
      Fecha: s.date,
      id: s.id
    };
  });

    return (
        <div>
          <h4 className="text-5xl text-center font-light pt-10 pb-12">
        Ventas
      </h4>
        <div className="">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
        </div>
    )
}