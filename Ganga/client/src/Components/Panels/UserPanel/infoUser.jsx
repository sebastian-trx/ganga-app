import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate} from "react-router-dom";

import { updateUser, getUserInfoGoogle } from "../../Redux/Actions/actions";
import s from './user.module.css';

export default function InfoUser() {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.getInfoGoogle);
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState("");

    useEffect(() => {
        dispatch(getUserInfoGoogle());
      }, [dispatch]);

      const name = user.name
      const surname = user.surname
      const mail = user.mail
      // const birthdate = userfil.birthdate
      const address = user.address
     
  
      const [input, setInput] = useState({
          id: user.id,
          name: name,
          surname: surname,
          mail: mail,
          // birthdate: birthdate,
          address: address,
          image: image,
      })
      console.log(input)

      const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "htnah6yo");
        setLoading(true);

        const res = await fetch(
            "https://api.cloudinary.com/v1_1/djrddcab5/image/upload",
            {
                method: "POST",
                body: data,
            }
        );

        const file = await res.json();
        setImage(file.secure_url);
    };
    const submit = (e) => {
        e.preventDefault();
        dispatch(updateUser(input));
        navigate("/panel")
        window.location.reload();
    }

  
    return (
        <div>
        <h3 className="text-center text-3xl m-5 mt-20">Modificar tus datos</h3>
        <form className="text-center" onSubmit={submit}>
            <div className="p-5">
                <div>
                    <label> Nombre </label>
                </div>
                <input className="text-center bg-gray-700 text-white"
                    onChange={handleChange}
                    type="text"
                    value={input.name}
                    name="name"
                    placeholder="Nombre"
                />
            </div>
            <div className="p-5">
                <div>
                    <label> Apellido </label>
                </div>
                <input className="text-center bg-gray-700 text-white"
                    onChange={handleChange}
                    type="text"
                    value={input.surname}
                    name="surname"
                    placeholder="Apellido"
                />
            </div>
            <div className="p-5">
                <div>
                    <label> Correo </label>
                </div>
                <input className="text-center bg-gray-700 text-white"
                    onChange={handleChange}
                    type="text"
                    value={input.mail}
                    name="mail"
                    placeholder="Correo"
                />
            </div>
            {/* <div>
                <input
                    onChange={handleChange}
                    type="date"
                    value={input.birthdate}
                    name="birthdate"
                    placeholder="Fecha de Nacimiento"
                />
            </div> */}
            <div className="p-5">
                <div>
                    <label> Zona </label>
                </div>
                <input className="text-center bg-gray-700 text-white"
                    onChange={handleChange}
                    type="text"
                    value={input.address}
                    name="address"
                    placeholder="Zona"
                />
            </div>
            <div>
                            <div className="pt-0 pb-2">
                                <label>Imagen de Perfil</label>
                            </div>
                            <div className="text-center bg-gray-700 text-white">
                                <input

                                    className={s.inputs}
                                    onChange={uploadImage}
                                    type="file"
                                    name="image"
                                    required="required"
                                    accept="image/png,image/jpeg"
                                />
                            </div>
                            <div className={s.imgName}>{(input.image = image)}</div>
                            <label>
                                {loading ? (
                                    <div>
                                    <img className={s.imageUp} src={image} alt="No hay imagen" />
                                    </div>
                                ) : (
                                    <p>Aun no has subido una imagen</p>
                                )}
                            </label>
                        </div>
            <div className="p-5">
                <button className={s.btnActualizar} type="submit">
                    Actualizar
                </button>
            </div>

        </form>
    </div>

    )
}


