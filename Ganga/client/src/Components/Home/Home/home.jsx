import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProduct } from "../../Redux/Actions/actions";
import Nav from "../../Nav/NavBar/nav";
import s from "./home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const allProduct = useSelector((state) => state.allProduct);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div>
      <div className={s.nav}>
        <Nav />
      </div>
      <div className={s.home}>
       FOTO <br/> ACA
      </div>
    </div>
  );
}

