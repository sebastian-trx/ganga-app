import React from "react";

import LoginForm from "./loginForm";
import s from "./login.module.css";

export default function Login() {

  return (
    <div className={s.body}>
    <div className={s.left}>
    </div>
    <div className={s.right}>
      <LoginForm/>
    </div>
    </div>
  )
}