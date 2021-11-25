import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

import s from "./signup.module.css";


export default function SignUpForm() {
  const [input, setInput] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    contraseña: "",
    numero: "",
    dirección: "",
  });

  const [errors, setErrors] = useState({});

  function validate(input) {
    let errors = {};
    if (!input.nombre) {
      errors.nombre = "Ingrese su nombre.";
    } else if (!input.apellido) {
      errors.apellido = "Ingrese su apellido.";
    } else if (!input.correo) {
      errors.correo = "Ingrese el correo con el que se ha registrado";
    } else if (!input.contraseña) {
      errors.contraseña = "Ingrese su contraseña.";
    } else if (!input.numero) {
      errors.numero = "Ingrese su numero de telefono.";
    } else if (!input.dirección) {
      errors.dirección = "Ingrese la dirección de su vivienda.";
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
      nombre: "",
      apellido: "",
      correo: "",
      contraseña: "",
      numero: "",
      dirección: "",
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Registrate</h2>
        <hr />
        <div>

        <h5>puedes registrarte usando tu cuenta de Google.</h5>
          <button //onClick= {}
          >
            <FaGoogle /> Crear cuenta
          </button>
        </div>

        <div className="">
          <input
            name="nombre"
            type="text"
            placeholder="Nombre"
            value={input.nombre}
            onChange={handleChange}
            //className={}
          ></input>
          {errors.nombre && <p>{errors.nombre}</p>}
        </div>

        <div className="">
          <input
            name="apellido"
            type="text"
            placeholder="Apellido"
            value={input.apellido}
            onChange={handleChange}
            //className={}
          ></input>
          {errors.apellido && <p>{errors.apellido}</p>}
        </div>

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

        <div className="">
          <input
            name="numero"
            type="number"
            placeholder="Numero"
            value={input.numero}
            onChange={handleChange}
            // className={}
          ></input>
          {errors.numero && <p>{errors.numero}</p>}
        </div>

        <div className="">
          <input
            name="dirección"
            type="text"
            placeholder="Dirección"
            value={input.dirección}
            onChange={handleChange}
            // className={}
          ></input>
          {errors.dirección && <p>{errors.dirección}</p>}
        </div>

        <button
          type="submit"
          value="submit"
          disabled={
            !(
              input.nombre &&
              input.apellido &&
              input.contraseña &&
              input.correo &&
              input.numero &&
              input.dirección
            )
          }
        >
        Crear cuenta
        </button>
      </form>

      <h5> ¿Ya tienes cuenta?</h5>
      <Link to="">
        <button> Entra aquí</button>
      </Link>
    </div>
  );
}
