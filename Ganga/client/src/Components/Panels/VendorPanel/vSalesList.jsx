import React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function VendorSalesList({ user, orders, users }) {
  
  for (var i = 0; i < orders.length; i++) {
    for (var j = 0; j < orders[i].productInfo.length; j++) {
      orders[i].productInfo[j].date = orders[i].createdAt.slice(0, 10);
      orders[i].productInfo[j].user = orders[i].userId
      orders[i].productInfo[j].total =
        orders[i].productInfo[j].quantity * orders[i].productInfo[j].price;
    }
  }
  

  let sales = orders.map((o) => o.productInfo).flat();


  sales = sales.filter((s) => s.owner === user.id);



  const columns = [
    { field: "id", headerName: "id", width: 30 },
    { field: "Usuario", headerName: "Usuario", width: 130 },
    { field: "Correo", headerName: "Correo", width: 150 },
    { field: "Producto", headerName: "Producto", width: 180 },
    { field: "Cantidad", headerName: "Cantidad", type: "number", width: 90 },
    { field: "Total", headerName: "Total", type: "number", width: 100 },
    { field: "Fecha", headerName: "Fecha",  width: 100 },
  ];

  const rows = sales?.map((s) => {
  let comprador = users.filter(u  => u.id === s.user);
  comprador = comprador[0];

  let user = comprador.name + " " + comprador.surname;
  let mail = comprador.mail;
    return {
      Usuario: user,
      Correo: mail,
      Producto: s.name,
      Cantidad: s.quantity,
      Total: "$ " + s.total,
      Fecha: s.date,
      id: s.id,
    };
  });

  return (
    <div>
      <h4 className="text-5xl text-center font-light pt-10 pb-12">Ventas</h4>
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
  );
}
