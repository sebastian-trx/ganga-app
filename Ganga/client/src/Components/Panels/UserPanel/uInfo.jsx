import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { useNavigate } from "react-router-dom";


import { updateUser } from "../../Redux/Actions/actions";

export default function UserInfo() {
    const dispatch = useDispatch();
    const modUser = useSelector((state) => state.allUsers)

    const navigate = useNavigate();


    const { id } = useParams()

    const name = modUser.name
    const surname = modUser.surname
    const mail = modUser.mail

    const [input, setInput] = useState({
        id: modUser.id,
        name: name,
        surname: surname,
        mail: mail
    })

    // useEffect(() => {
    //     dispatch(updateUser());
    // }, [dispatch]);

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
                <button type="submit">
                    Actualizar
                </button>
            </form>
        </div>
    )
}