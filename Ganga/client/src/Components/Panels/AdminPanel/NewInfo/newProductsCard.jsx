import React, { useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import s from "../../../Card/card.module.css";

import { approveProduct } from "../../../Redux/Actions/actions";



export default function NewProductsCard({ image, price, name, id, descripcion, products }) {
    const dispatch = useDispatch();
    const [productos, reloadProducts]=useState(products)
    
    function handleSubmit(){
        dispatch(approveProduct(id));
        reloadProducts(products.filter(p => p.approved === false));
    }

  return (
    <div className="border-2 border-black m-4">
      <Link to={"/product/" + id}>
        <div className={s.name}>
          <h1 className={s.h1}>{name.toUpperCase()}</h1>
        </div>

        <div className={s.div1}>
          <img className={s.img} src={image} alt={`imagen de ${name}`} />
        </div>


        <div className={s.div2}>
          <h3>$ {price} </h3>
        </div>

        <div className={s.div2}>
          <span className="text-xs p-2 max-w-xs text-center"> {descripcion} </span>
        </div>
        </Link>
        <div className={s.div2} >
            <button className="border-2 border-black m-2 hover:border-gray-500 hover:bg-gray-900 hover:text-white" onClick={handleSubmit}>
            <span className="text-base p-2 ">  aprobar</span>
            </button>
        </div>
     
    </div>
  );
}
