import React from "react";
import { /*useState,*/ useEffect } from "react";
import {Link} from "react-router-dom"
import { useDispatch, /*useSelector*/ } from "react-redux";
import { getProduct } from "../../Redux/Actions/actions";
import Nav from "../../Nav/NavBar/nav";
import headphones  from "../../Resources/headphones.jpg"
import f from "./home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  // let products = useSelector((state) => state.allProduct2)
 

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <div /*className={f.imgsProducts}*/>
        <Link to="/catalogo">
        <img className={f.hp} src={headphones} alt="headphones" />
        </Link>
      </div>
      </div>
  );
}
