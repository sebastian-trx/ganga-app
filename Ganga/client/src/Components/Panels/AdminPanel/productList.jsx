import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { TiDeleteOutline } from "react-icons/ti";

import { getProduct } from "../../Redux/Actions/actions";
import ProductsChart from "./aCharts/Products";
import s from "./admin.module.css";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "Nombre", headerName: "Nombre", width: 200 },
    { field: "Precio", headerName: "Precio", type: "number", width: 100 },
    { field: "Categoria", headerName: "Categoria", width: 160 },
    { field: "Stock", headerName: "Stock", type: "number", width: 100 },
    {
      field: "action",
      headerName: "Acción",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className={s.editar}> edit </button>
            </Link>
            <button onClick> <TiDeleteOutline className={s.delete}/> </button>
          </>
        );
      },
    },
  ];

  let rows = products.map((p) => {
    return {
      id: p.id,
      Nombre: p.name,
      Precio: "$" + p.price,
      Categoria: p.categories,
      Stock: p.stock,
    };
  });

  return (
    <div >
      <h4 className="text-5xl text-center font-light pt-10 pb-12">Productos</h4>
      <Link to="/registrarme">
        <button className="absolute top-40 right-10 rounded-3xl bg-gray-300 hover:bg-gray-400 p-3">
          Crear
        </button>
      </Link>
      <div className={s.listaProductos}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
      <ProductsChart/>
    </div>
  );
}


//DELETE: http://localhost:3001/product?id=