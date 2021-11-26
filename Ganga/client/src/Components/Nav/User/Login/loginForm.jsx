import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

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
        <h4 className="text-left pl-10 pb-6 pt-10 text-2xl">Inicia Sesión</h4>
        <hr className=" border-black mx-10"/>

        <div className="pt-14">
          <input className="w-96 border-gray-400 border-2 rounded pl-2"
            name="correo"
            type="email"
            placeholder="Correo electrónico"
            value={input.correo}
            onChange={handleChange}
          ></input>
          {errors.correo && <p>{errors.correo}</p>}
        </div>

        <div className="py-14">
          <input className="w-96 border-gray-400 border-2 rounded pl-2"
            name="contraseña"
            type="password"
            placeholder="Contraseña"
            value={input.contraseña}
            onChange={handleChange}
          ></input>
          {errors.contraseña && <p>{errors.contraseña}</p>}
        </div>

        <button className="border-gray-400 border-2 rounded px-3 py-1 text-xl"
          type="submit"
          value="submit"
          disabled={!(input.contraseña && input.correo)}
        >
          Iniciar Sesión
        </button>
      </form>

      <h5 className="pt-12 pb-7 text-lg"> ¿Aún no tienes cuenta?</h5>
      <Link to="/registrarme">
        <button className="text-red-400 pb-5  text-lg"> Registrate aquí</button>
      </Link>

      <h5 className=" text-lg pb-12"> O entra con Google</h5>
      <div>
          <button className="border-2 border-black px-2 text-xl"//onClick= {}
          >
            <FcGoogle className="inline-block px-1 w-10 h-10" /> Inicia sesión con Google
          </button>
        </div>
    </div>
  );
}
