import React from "react";
import LoginForm from "./loginForm";
import s from "./login.module.css";

import { /*useState,*/ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserInfoGoogle } from "../../../Redux/Actions/actions";

export default function Login() {
  ///////
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getInfoGoogle } = useSelector((state) => state);

  ///////////////////////////////////////////////
  useEffect(() => {
    dispatch(getUserInfoGoogle());
  }, [dispatch]);

  console.log(getInfoGoogle.login);

  if (getInfoGoogle.login === true) {
    // history.push("/home ")
    navigate("/");
  }
  //////////////////////////////////////////////

  return (
    <div className={s.body}>
      <div className={s.left}>
        <h1 className="pl-80 pt-80">FOTO ACA</h1>
      </div>
      <div className={s.right}>
        <LoginForm />
      </div>
    </div>
  );
}
