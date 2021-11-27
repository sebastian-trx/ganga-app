import React from "react";
import { /*useState,*/ useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "../../Redux/Actions/actions";
import Nav from "../../Nav/NavBar/nav";
// import headphones from "../../Resources/headphones.jpg";
// import f from "./home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  // let products = useSelector((state) => state.allProduct2)

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <div className={f.imgsProducts}>
        <div>
          <img className={f.hp} src={headphones} alt="headphones" />
        </div>
      </div>
    </div>
  );
}
