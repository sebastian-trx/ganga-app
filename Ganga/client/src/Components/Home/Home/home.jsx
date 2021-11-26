import React from "react";
import { /*useState,*/ useEffect } from "react";
import { useDispatch /*useSelector*/ } from "react-redux";
import { getProduct } from "../../Redux/Actions/actions";
import s from "./home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  // const allProduct = useSelector((state) => state.allProduct)

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div className={s.home}>
      <div>
      </div>
    </div>
  );
}
