import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { LoginG } from "../../User/LoginGoogle/loginG";
import { signUp, localLogin } from "../../../Redux/Actions/actions";

export default function SignUpForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    surname: "",
    mail: "",
    password: "",
    rPassword: "",
    cellphone: "",
    address: "",
    country: "",
    province: "",
    cp: "",
    birthdate: "",
    seller: "",
  });

  const [errors, setErrors] = useState({});

  function validate(input) {
    let errors = {};
    //name, surname, numero, fecha, mail, contraseña, repite, pais, depart, CP, direccion
    if (!input.name) {
      errors.name = "Ingrese su nombre.";
    } else if (!input.surname) {
      errors.surname = "Ingrese su apellido.";
    } else if (!input.cellphone) {
      errors.cellphone = "Ingrese su numero de telefono.";
    } else if (!input.birthdate) {
      errors.birthdate = "Ingrese su fecha de nacimiento.";
    } else if (!input.mail) {
      errors.mail = "Ingrese su correo.";
    } else if (!input.password) {
      errors.password = "Ingrese su contraseña.";
    } else if (!input.rPassword) {
      errors.rPassword = "Repita su contraseña.";
    } else if (!input.country) {
      errors.country = "Ingrese su País.";
    } else if (!input.province) {
      errors.province = "Ingrese su Departamento.";
    } else if (!input.cp) {
      errors.cp = "Ingrese su código postal.";
    } else if (!input.address) {
      errors.address = "Ingrese la dirección de su vivienda.";
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
    dispatch(signUp(input));
    setTimeout(() => {
      dispatch(localLogin(input));
      navigate("/");
    }, 200);  
}

  function handleSelectSeller(e) {
    setInput({
      ...input,
      seller: e.target.value
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 className="text-left pl-20 pb-3 pt-3 text-2xl">Registrate</h2>
        <hr className="border-black mx-8 mb-4" />

        <div className="flex items-center content-center justify-center">
          <input
            className="w-60 border-gray-400 border-2 rounded pl-2 mx-2"
            name="name"
            type="text"
            placeholder="Nombre"
            value={input.name}
            onChange={handleChange}
          ></input>
          <input
            className="w-60 border-gray-400 border-2 rounded pl-2 mx-2"
            name="surname"
            type="text"
            placeholder="Apellido"
            value={input.surname}
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex items-start content-center justify-center h-5">
          <div>
            {errors.name && <p className="text-red-600">{errors.name}</p>}
          </div>
          <div>
            {errors.surname && <p className="text-red-600">{errors.surname}</p>}
          </div>
        </div>

        <div className="flex items-center content-center justify-center">
          <input
            class="w-40 border-gray-400 border-2 rounded pl-2 appearance-none mx-2 hover:appearance-none"
            name="cellphone"
            type="number"
            min="0"
            step="0"
            placeholder="Número de celular"
            value={input.cellphone}
            onChange={handleChange}
          ></input>
          <input
            className="w-40 h-7 border-gray-400 border-2 rounded pl-2 mx-2"
            name="birthdate"
            type="date"
            placeholder="Fecha de Nacimiento"
            value={input.birthdate}
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex items-start content-center justify-center h-5">
          <div>
            {errors.cellphone && (
              <p className="text-red-600">{errors.cellphone}</p>
            )}
          </div>
          <div>
            {errors.birthdate && (
              <p className="text-red-600">{errors.birthdate}</p>
            )}
          </div>
        </div>

        <div>
          <input
            className="w-96 border-gray-400 border-2 rounded pl-2"
            name="mail"
            type="email"
            placeholder="Correo electrónico"
            value={input.mail}
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex items-start content-center justify-center h-5">
          <div>
            {errors.mail && <p className="text-red-600">{errors.mail}</p>}
          </div>
        </div>

        <div className="flex items-center content-center justify-center">
          <input
            className="w-60 border-gray-400 border-2 rounded pl-2 mx-2"
            name="password"
            type="password"
            placeholder="Contraseña"
            value={input.password}
            onChange={handleChange}
          ></input>
          <input
            className="w-60 border-gray-400 border-2 rounded pl-2 mx-2"
            name="rPassword"
            type="password"
            placeholder="Repetir contraseña"
            value={input.rPassword}
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex items-start content-center justify-center h-5">
          <div>
            {errors.password && (
              <p className="text-red-600">{errors.password}</p>
            )}
          </div>
          <div>
            {errors.rPassword && (
              <p className="text-red-600">{errors.rPassword}</p>
            )}
          </div>
        </div>

        <div className="flex items-center content-center justify-center">
          <input
            className="w-45 border-gray-400 border-2 rounded pl-2 mx-2"
            name="country"
            type="text"
            placeholder="País"
            value={input.country}
            onChange={handleChange}
          ></input>
          <input
            className="w-45 border-gray-400 border-2 rounded pl-2 mx-2"
            name="province"
            type="text"
            placeholder="Departamento"
            value={input.province}
            onChange={handleChange}
          ></input>
          <input
            className="w-24 border-gray-400 border-2 rounded pl-2 mx-2"
            name="cp"
            type="text"
            placeholder="CP"
            value={input.cp}
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex items-start content-center justify-center h-5">
          <div>
            {errors.country && <p className="text-red-600">{errors.country}</p>}
          </div>
          <div>
            {errors.province && (
              <p className="text-red-600">{errors.province}</p>
            )}
          </div>
          <div>{errors.cp && <p className="text-red-600">{errors.cp}</p>}</div>
        </div>

        <div className="flex items-center content-center justify-center">
          <input
            className="w-96 border-gray-400 border-2 rounded pl-2"
            name="address"
            type="text"
            placeholder="Dirección"
            value={input.address}
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex items-start content-center justify-center h-5">
          <div>
            {errors.address && <p className="text-red-600">{errors.address}</p>}
          </div>
              </div>

          <div className="pb-2">
            <p className="inline-block">¿Desea ser vendedor?</p>
                            <select className="inline-block" name="seller" value={input.seller} onChange={handleSelectSeller}>
                                <option value="" disabled="disabled" >Seleccionar</option>
                                <option value="true">Si</option>
                                <option value="false">No </option>
                            </select>
                        </div>

        <button
          className="border-gray-400 border-2 rounded px-2 py-1 text-xl"
          type="submit"
          value="submit"
          disabled={
            !(
              input.name &&
              input.surname &&
              input.password &&
              input.rPassword &&
              input.mail &&
              input.cellphone &&
              input.address &&
              input.country &&
              input.province &&
              input.cp &&
              input.birthdate
            )
          }
        >
          Crear cuenta
        </button>
      </form>

      <div>
        <h5 className=" text-lg py-3">
          O puedes registrarte usando tu cuenta de Google
        </h5>
        <LoginG />
      </div>

      <h5 className="pt-3 text-lg"> ¿Ya tienes una cuenta?</h5>
      <Link to="/ingresar">
        <button className="text-red-400 text-lg"> Entra aquí</button>
      </Link>
    </div>
  );
}
