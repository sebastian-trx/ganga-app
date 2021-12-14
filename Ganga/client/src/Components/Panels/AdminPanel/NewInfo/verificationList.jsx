import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { TiDeleteOutline } from "react-icons/ti";

import s from "../admin.module.css";
import { approveProduct, deleteProduct} from "../../../Redux/Actions/actions";

export default function VerificationList({ products }) {
    console.log("products", products);
    const dispatch = useDispatch();
    let newProducts = products.filter((p) => p.approved === false);
    console.log("newP", newProducts);



  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "Nombre", headerName: "Nombre", width: 200 },
    { field: "Precio", headerName: "Precio", type: "number", width: 100 },
    { field: "Categoria", headerName: "Categoria", width: 160 },
    { field: "Subcategoria", headerName: "Subcategoria", width: 160 },
    { field: "Marca", headerName: "Marca", width: 100 },
    { field: "Stock", headerName: "Stock", type: "number", width: 70 },
    {
      field: "action",
      headerName: "Acción",
      width: 150,
      renderCell: (params) => {
        const id = params.row.id;
        return (
          <>
            <button className={s.editar} onClick={() => handleSubmit(id)}>
              {" "}
              autorizar{" "}
            </button>

            <button onClick={() => handleDelete(id)}>
              {" "}
              <TiDeleteOutline className={s.delete} />{" "}
            </button>
          </>
        );
      },
    },
  ];

  function handleSubmit(id) {
    console.log("aprobadoo")
    dispatch(approveProduct(id));
    setRows(rows.filter((i) => i.id !== id));
  }

  function handleDelete(id) {
    dispatch(deleteProduct(id));
    setRows(rows.filter((i) => i.id !== id));
  }

  let Rows = newProducts?.map((p) => {
    return {
      id: p.id,
      Nombre: p.name,
      Precio: "$" + p.price,
      Categoria: p.categories,
      Stock: p.stock,
    };
  });

  
  const [rows, setRows] = useState(Rows);
  console.log("rows", rows)

  return (
    <div>
      <h1 className="text-3xl p-8"> Productos a revisar:</h1>

      <div className={s.listaProductos}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[20]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
