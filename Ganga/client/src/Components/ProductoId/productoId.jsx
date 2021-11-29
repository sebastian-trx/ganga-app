import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getDetailsProduct } from "../Redux/Actions/actions";
import Nav from "../../Components/Nav/NavBar/nav";
import a from "./productoId.module.css";

export default function ProductId() {
  const dispatch = useDispatch();
  const [state, setState] = useState([]);
  const info = useSelector((state) => state.detailProduct);
  const { id } = useParams();

  const getDetails = () => {
    if (Object.keys(state).length === 0) dispatch(getDetailsProduct(id));
  };

  useEffect(() => {
    getDetails();
    return () => {
      setState([]);
    };
  }, );

  useEffect(() => {
    setState(info);
  }, [info]);

  return (
    <div>
      <Nav />
      <div className={a.todo}>
        <div className={a.container}>
          <>
            <div className={a.derecho}>
              <div className={a.div1}>
                <img src={info.image} className={a.img} alt="" />
              </div>
              <div className={a.div2}>
                <div className={a.name}>
                  <h1>{info.name}</h1>
                </div>
                <div className={a.descrip}>
                  <p>{info.description}</p>
                </div>
                <div className={a.start}>⭐⭐⭐⭐⭐</div>
                <div className={a.price}>
                  <h2>$ {info.price} usd</h2>
                </div>
              </div>
            </div>

            <div className={a.izq}>
              <div className={a.pago}>
                <h3> DESCRIPCION DEL PAGO</h3>
              </div>
              <div className={a.div3}>
                <button className={a.bnt}>Comprar</button>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}
