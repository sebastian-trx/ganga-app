import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

// import s from "./login.module.css";

export default function LoginForm() {
  const [input, setInput] = useState({
    correo: "",
    contraseña: "",
  });

  const [errors, setErrors] = useState({});

  function validate(input) {
    let errors = {};
    if (!input.correo) {
      errors.correo = "Ingrese el correo con el que se ha registrado";
    } else if (!input.contraseña) {
      errors.contraseña = "Ingrese su contraseña.";
    }
    return errors;
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    // dispatch(inserteAccionAqui(input))
    setInput({
      correo: "",
      contraseña: "",
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Login</h4>
        <hr />

        <div className="">
          <input
            name="correo"
            type="email"
            placeholder="Correo electrónico*"
            value={input.correo}
            onChange={handleChange}
            //className={}
          ></input>
          {errors.correo && <p>{errors.correo}</p>}
        </div>

        <div className="">
          <input
            name="contraseña"
            type="password"
            placeholder="Contraseña*"
            value={input.contraseña}
            onChange={handleChange}
            // className={}
          ></input>
          {errors.contraseña && <p>{errors.contraseña}</p>}
        </div>

        <button
          type="submit"
          value="submit"
          disabled={!(input.contraseña && input.correo)}
        >
          Iniciar sesión
        </button>
      </form>

      <h5> ¿Aún no tienes cuenta?</h5>
      <Link to="">
        <button> Registrate aquí</button>
      </Link>

      <h5> o entra con Google</h5>
      <div>
          <button //onClick= {}
          >
            <FaGoogle /> Iniciar sesión
          </button>
        </div>
    </div>
  );
}
