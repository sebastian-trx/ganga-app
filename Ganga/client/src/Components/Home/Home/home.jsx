import React from "react";
import Nav from '../../Nav/NavBar/NavBar'
import s from './home.module.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from "../../Redux/Actions/actions";

export default function Home(){
    const dispatch = useDispatch()
    const allProduct = useSelector((state) => state.allProduct)

    useEffect(() =>{
        dispatch(getProduct())
    }, [dispatch])

    return(
        <div className={s.home}>
        <div className={s.nav}>
            <Nav/>
        </div>
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <p>Espacio</p>
        </div>
        </div>
    )
}