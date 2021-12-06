import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux'

export default function InfoUser() {
    const dispatch = useDispatch();
    const [state, setState] = useState({});
    const getInfoGoogle = useSelector((state) => state.getInfoGoogle)

  
    return (
        <div>
            <h1>Informacion Usuario</h1>
        </div>
    )
}


