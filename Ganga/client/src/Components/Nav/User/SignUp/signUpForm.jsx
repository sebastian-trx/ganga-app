import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FcGoogle  } from "react-icons/fc";
// import { FaGoogle } from "react-icons/fa";
import LoginG from '../LoginGoogle/loginG'

<<<<<<< HEAD
=======
// import s from "./signup.module.css";
>>>>>>> 3aae4c7f9f8046097882bddbb81cada63d6319f6


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
<<<<<<< HEAD
        <h2 className="text-left pl-20 pb-2 pt-3 text-2xl">Registrate</h2>
        <hr className="border-black mx-20"/>
=======
        <h2 className="text-left pl-10 pb-3 pt-5 text-2xl">Registrate</h2>
        <hr className="border-black mx-10"/>
          
//         <h2>Registrate</h2>
//         <hr />
//         <div>

//         <h5>puedes registrarte usando tu cuenta de Google.</h5>
//           {/* <button //onClick= {}
//           >
//             <FaGoogle /> Crear cuenta
//           </button> */}
//           <LoginG/>
//         </div>
>>>>>>> 3aae4c7f9f8046097882bddbb81cada63d6319f6

        <div className="pt-5">
          <input className="w-96 border-gray-400 border-2 rounded pl-2"
            name="nombre"
            type="text"
            placeholder="nombre"
            value={input.nombre}
            onChange={handleChange}
          ></input>
          {errors.nombre && <p>{errors.nombre}</p>}
        </div>

        <div className="pt-5">
          <input className="w-96 border-gray-400 border-2 rounded pl-2"
            name="apellido"
            type="text"
            placeholder="apellido"
            value={input.apellido}
            onChange={handleChange}
          ></input>
          {errors.apellido && <p>{errors.apellido}</p>}
        </div>

        <div className="pt-5">
          <input className="w-96 border-gray-400 border-2 rounded pl-2"
            name="correo"
            type="email"
            placeholder="correo electrónico"
            value={input.correo}
            onChange={handleChange}
          ></input>
          {errors.correo && <p>{errors.correo}</p>}
        </div>

        <div className="pt-5">
          <input className="w-96 border-gray-400 border-2 rounded pl-2"
            name="contraseña"
            type="password"
            placeholder="contraseña"
            value={input.contraseña}
            onChange={handleChange}
          ></input>
          {errors.contraseña && <p>{errors.contraseña}</p>}
        </div>

        <div className="pt-5">
          <input className="w-96 border-gray-400 border-2 rounded pl-2"
            name="numero"
            type="number"
            placeholder="numero"
            value={input.numero}
            onChange={handleChange}
          ></input>
          {errors.numero && <p>{errors.numero}</p>}
        </div>

        <div className="py-5">
          <input className="w-96 border-gray-400 border-2 rounded pl-2"
            name="dirección"
            type="text"
            placeholder="dirección"
            value={input.dirección}
            onChange={handleChange}
          ></input>
          {errors.dirección && <p>{errors.dirección}</p>}
        </div>

        <button className="border-gray-400 border-2 rounded px-3 py-1 text-xl"
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

        <div>
        <h5 className=" text-lg py-4">O puedes registrarte usando tu cuenta de Google</h5>
          <button className="border-2 border-black px-2 text-xl"//onClick= {}
          >
            <FcGoogle  className="inline-block px-1 w-10 h-10"/> Crear cuenta
          </button>
        </div>

      <h5 className="pt-4 pb-4 text-lg"> ¿Ya tienes una cuenta?</h5>
      <Link to="/ingresar">
        <button className="text-red-400 pb-3  text-lg"> Entra aquí</button>
      </Link>
    </div>
  );
}
