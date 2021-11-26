import React from "react";

import SignUpForm from "./signUpForm";
import s from "./signup.module.css";

export default function Login() {

  return (
    <div className={s.body}>
    <div className={s.left}>
    <h1 className="pl-80 pt-80">FOTO ACA</h1>
    </div>
    <div className={s.right}>
      <SignUpForm/>
    </div>
    </div>
  )
}