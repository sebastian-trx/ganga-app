import React, { useState, useEffect } from "react";
import { /*useSelector,*/ useDispatch } from "react-redux";
import { addReview, getUserInfoGoogle } from "../Redux/Actions/actions.js";

export default function ReviewProduct({ idUser, idProduct }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    description: "",
    qualificacion: "",
    // idUser: idUser,
    // idProduct: idProduct
  });

  // console.log(idProduct);

  useEffect(() => {
    dispatch(getUserInfoGoogle());
  }, [dispatch]);

  const [errors, setErrors] = useState({});

  function validate(input) {
    let errors = {};
    let comprobacion2 = /^([0-9]{1,2})$/;

    if (!input.description) {
      errors.description = "Ingrese una descripción";
    }
    if (!input.qualificacion) {
      errors.qualificacion = "Ingrese una calificación";
    } else if (!comprobacion2.test(input.qualificacion)) {
      errors.qualificacion = "Ingrese una calificación de 1 a 10.";
    } else if (!(input.qualificacion > 0 && input.qualificacion <= 10)) {
      errors.qualificacion = "La calificación debe estar entre 1 y 10";
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

  function handleSubmitReviewProduct(e) {
    e.preventDefault();
    dispatch(
      addReview({
        description: input.description,
        qualificacion: input.qualificacion,
        // idProduct: input.idProduct,
        idProduct: idProduct,
      })
    );
    setInput({
      description: "",
      qualificacion: "",
    });
  }

 

  return (
    <div>
      <form>
        <div class=" my-1">
          <textarea
            className="h-19 border-gray-400 border-2 rounded pl-2 resize-none"
            name="description"
            type="text"
            placeholder="¿Que te parecio el producto?"
            value={input.description}
            onChange={handleChange}
          ></textarea>
          {errors.description && <p>{errors.description}</p>}
          </div>
          <div class=" my-1">
          <input
            className="h-9 w-36 border-gray-400 border-2 rounded pl-2 ml-3 resize-none"
            name="qualificacion"
            type="number"
            min="1"
            max="10"
            placeholder="Calificalo 1 - 10"
            value={input.qualificacion}
            onChange={handleChange}
          ></input>
          {errors.qualificacion && <p>{errors.qualificacion}</p>}
          <div>
        <button
          className="border-gray-400 border-2 rounded ml-16 m-2 px-1 text-s mb-10"
          value="submit"
          onClick={handleSubmitReviewProduct}
          disabled={!(input.qualificacion && input.description)}
        >
          enviar
        </button>
          </div>
        </div>


      </form>
    </div>
  );
}
