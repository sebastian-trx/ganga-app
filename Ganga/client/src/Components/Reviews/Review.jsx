import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addReview, getUserInfoGoogle } from '../Redux/Actions/actions.js'

export function Review ({idUser, idProduct}){
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        description: "",
        qualificacion: "",
        idUser: idUser,
        idProduct: idProduct
      });

      
      useEffect(() => {
        dispatch(getUserInfoGoogle());
      }, [dispatch]);

      const [errors, setErrors] = useState({});

      function validate(input) {
        let errors = {};
        if (!input.description) {
          errors.description = "Ingrese el correo con el que se ha registrado";
        } else if (!input.qualificacion) {
          errors.qualificacion = "Ingrese su contraseña.";
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
        dispatch(addReview({description: input.description,
        qualificacion: input.qualificacion,
        idProduct: input.idProduct,
        }));
        setInput({        
        description: "",
        qualificacion: "",
        })

      } 

      function handleSubmitReviewUser(e) {
        e.preventDefault();
        dispatch(addReview({description: input.description,
        qualificacion: input.qualificacion,
        idUser: input.idUser,
        }))
        setInput({        
        description: "",
        qualificacion: "",
})
      }  

    return (
        <div>
            <form>

        <div className="pt-10">
          <input className="w-96 border-gray-400 border-2 rounded pl-2"
            name="description"
            type="text"
            placeholder="Descripción"
            value={input.description}
            onChange={handleChange}
          ></input>
          {errors.description && <p>{errors.description}</p>}
        </div>

        <div className="py-14">
          <input
            className="w-96 border-gray-400 border-2 rounded pl-2"
            name="qualificacion"
            type="text"
            placeholder="Calificacion"
            value={input.qualificacion}
            onChange={handleChange}
          ></input>
          {errors.qualificacion && <p>{errors.qualificacion}</p>}
        </div>

        <button
          className="border-gray-400 border-2 rounded px-3 py-1 text-xl"
          type="text"
          value="submit"
          onClick={handleSubmitReviewProduct}
          disabled={!(input.qualificacion && input.description)}
        >
          Agregar reseña a producto
        </button>
        <button
          className="border-gray-400 border-2 rounded px-3 py-1 text-xl"
          type="text"
          value="submit"
          onClick={handleSubmitReviewUser}
          disabled={!(input.qualificacion && input.description)}
        >
          Agregar reseña a vendedor
        </button>
      </form>
        </div>
    )
}

{/* <h4 className="text-left pl-10 pb-3 pt-6 text-2xl">Inicia Sesión</h4>
<hr className=" border-black mx-10"/> */}
