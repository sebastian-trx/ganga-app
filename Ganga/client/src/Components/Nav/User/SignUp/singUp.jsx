import React from "react";

import SignUpForm from "./signUpForm";
import s from "./signup.module.css";

export default function Login() {
  return (
    <div className={s.body}>
      <div className={s.left}></div>
      <div className={s.right}>
        <SignUpForm />
      </div>
    </div>
  );
}
