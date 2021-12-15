import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { updateUser, getUserInfoGoogle } from "../../Redux/Actions/actions";
import s from "./user.module.css";

export default function InfoUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.getInfoGoogle);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    dispatch(getUserInfoGoogle());
  }, [dispatch]);

  const name = user.name;
  const surname = user.surname;
  const mail = user.mail;
  const cellphone = user.cellphone;
  const birthdate = user.birthdate;
  const address = user.address;
  const country = user.country;
  const province = user.province;
  const cp = user.cp;

  const [input, setInput] = useState({
    id: user.id,
    name: name,
    surname: surname,
    mail: mail,
    cellphone: cellphone,
    birthdate: birthdate,
    address: address,
    country: country,
    province: province,
    cp: cp,
    image: image,
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

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
    navigate("/panel");
    window.location.reload();
  };

  return (
    <div>
      <h3 className="text-center text-3xl m-5 mt-20">Modificar tus datos</h3>
      <form className="text-center" onSubmit={submit}>
        <div className="items-center justify-center content-center">
          <div className="pt-0 pb-2">
            <div className="absolute right-40 top-48">
              <h1 className="w-40 py-1 my-1 text-center rounded-full bg-gray-700 text-white">Tu imagen actual</h1>
              {
                !user.image? 
                <img className={s.perfil}
                src="https://img2.freepng.es/20180420/aie/kisspng-computer-icons-silhouette-user-profile-5ada934a8f5461.2830952615242739945871.jpg"
                alt=" imagen algternativa"/>:
              <img className={s.perfil} src={user.image} alt = "imagen de perfil"/>
              }
            </div>
            <label>Imagen de Perfil</label>
          </div>
          <label>
            {loading ? (
              <div class="flex items-center content-center justify-center">
                <img
                  class="min-w-min min-h-min w-40 h-40 rounded"
                  src={image}
                  alt="No hay imagen"
                />
                <div className={s.imgName}>{(input.image = image)}</div>
              </div>
            ) : (
              <p>Aun no has subido una imagen</p>
            )}
          </label>
          <div className="m-auto w-80 rounded-full text-center bg-gray-700 text-white">
            <input

              className={s.inputs}
              onChange={uploadImage}
              type="file"
              name="image"
              required="required"
              accept="image/png,image/jpeg"
            />
          </div>
        </div>

        <div class="flex items-center justify-center content-center">
          <div className="px-1 py-4">
            <div>
              <label> Nombre </label>
            </div>
            <input
              className="w-60 text-center rounded bg-gray-700 text-white"
              onChange={handleChange}
              type="text"
              value={input.name}
              name="name"
              placeholder="Nombre"
            />
          </div>
          <div className="px-1 py-4">
            <div>
              <label> Apellido </label>
            </div>
            <input
              className="w-60 text-center rounded bg-gray-700 text-white"
              onChange={handleChange}
              type="text"
              value={input.surname}
              name="surname"
              placeholder="Apellido"
            />
          </div>
        </div>

        <div class="flex items-center justify-center content-center">
          <div className="px-8 py-4">
            <div>
              <label> Fecha de Nacimiento </label>
            </div>
            <input
              className="w-60 text-center rounded bg-gray-700 text-white"
              onChange={handleChange}
              type="date"
              value={input.birthdate}
              name="birthdate"
              placeholder="Fecha de Nacimiento"
            />
          </div>
          <div className="px-8 py-4">
            <div>
              <label> Número de celular </label>
            </div>
            <input
              class="w-60 text-center rounded bg-gray-700 text-white appearance-none"
              onChange={handleChange}
              type="number"
              value={input.cellphone}
              name="cellphone"
              placeholder="Número de celular"
            />
          </div>

          <div className="px-8 py-4">
            <div>
              <label> Correo </label>
            </div>
            <input
              className="w-60 text-center rounded bg-gray-700 text-white"
              onChange={handleChange}
              type="mail"
              value={input.mail}
              name="mail"
              placeholder="Correo"
            />
          </div>
        </div>

        <div class="flex items-center justify-center content-center">
          <div className="px-8 py-4">
            <div>
              <label> País </label>
            </div>
            <input
              className="w-60 rounded text-center bg-gray-700 text-white"
              onChange={handleChange}
              type="text"
              value={input.country}
              name="country"
              placeholder="País"
            />
          </div>
          <div className="px-8 py-4">
            <div>
              <label> Departamento </label>
            </div>
            <input
              className="w-60 rounded text-center bg-gray-700 text-white"
              onChange={handleChange}
              type="text"
              value={input.province}
              name="province"
              placeholder="Departamento"
            />
          </div>
          <div className="px-8 py-4">
            <div>
              <label> Código Postal </label>
            </div>
            <input
              className="w-60 rounded text-center bg-gray-700 text-white"
              onChange={handleChange}
              type="text"
              value={input.cp}
              name="cp"
              placeholder="Código postal"
            />
          </div>
        </div>
        <div className="px-8 py-4">
          <div>
            <label> Dirección </label>
          </div>
          <input
            className="w-96 rounded text-center bg-gray-700 text-white"
            onChange={handleChange}
            type="text"
            value={input.address}
            name="address"
            placeholder="Dirección"
          />
        </div>
        <div className="p-5">
          <button className={s.btnActualizar} type="submit">
            Actualizar
          </button>
        </div>
      </form>
    </div>
  );
}
