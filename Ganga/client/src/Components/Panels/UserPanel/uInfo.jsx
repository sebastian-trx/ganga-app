import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate, Link } from "react-router-dom";

import { updateUser, getAllUsers } from "../../Redux/Actions/actions";

import Nav from "../../Nav/NavBar/nav"

export default function UserInfo() {
    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state.allUsers)

    const navigate = useNavigate();

    const { id } = useParams()

    const userfil = allUsers.filter((el) => el.id === id)

    const name = userfil[0].name
    const surname = userfil[0].surname
    const mail = userfil[0].mail
    const birthdate = userfil[0].birthdate
    const address = userfil[0].address

    const [input, setInput] = useState({
        id: userfil[0].id,
        name: name,
        surname: surname,
        mail: mail,
        birthdate: birthdate,
        address: address,
    })

    useEffect(() => {
        dispatch(updateUser(input))
        dispatch(getAllUsers())
    }, [dispatch])

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault();
        dispatch(updateUser(input));
        navigate("/panel")
    }

    return (
        <div>
            <Nav />
            <h3>Modificalo chee</h3>
            <form onSubmit={submit}>
                <div>
                    <input
                        onChange={handleChange}
                        type="text"
                        value={input.name}
                        name="name"
                        placeholder="Nombre"
                    />
                </div>
                <div>
                    <input
                        onChange={handleChange}
                        type="text"
                        value={input.surname}
                        name="surname"
                        placeholder="Apellido"
                    />
                </div>
                <div>
                    <input
                        onChange={handleChange}
                        type="text"
                        value={input.mail}
                        name="mail"
                        placeholder="Correo"
                    />
                </div>
                <div>
                    <input
                        onChange={handleChange}
                        type="date"
                        value={input.birthdate}
                        name="birthdate"
                        placeholder="Fecha de Nacimiento"
                    />
                </div>
                <div>
                    <input
                        onChange={handleChange}
                        type="text"
                        value={input.address}
                        name="address"
                        placeholder="Zona"
                    />
                </div>
                <div>
                    <button type="submit">
                        Actualizar
                    </button>
                </div>
                <div>
                    <Link to="/panel">
                        <button type="button">
                            {"<-Volver"}
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    )
}