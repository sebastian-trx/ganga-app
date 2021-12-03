import React from "react";

import SignUpForm from "./signUpForm";
import foto from "../../../Resources/zapatillas.jpeg";
import fondo from "../../../Resources/fondo forms.jpeg";
import s from "./signup.module.css";

export default function Login() {
  return (
  <div>
   <img className={s.fondo} src={fondo} alt="" />
      <div className={s.left}>
       <img className={s.foto} src={foto} alt="" />
      </div>
      <div className={s.right}>
        <SignUpForm />
    </div>
  </div>
  );
}
