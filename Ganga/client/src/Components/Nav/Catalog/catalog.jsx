import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from "../../Redux/Actions/actions";
import Card from '../../Card/card'
import s from './catalog.module.css'
import BuscarProducto from '../Search/search'
import Logo from '../Logo/logo'
import { VscDebugRestart } from "react-icons/vsc";
import { Link } from "react-router-dom"
import FilterPrice from '../Filter/filterPrice'


export default function Catalogo() {

    const dispatch = useDispatch()
    const allProduct = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])


    function handleClick(e) {
        e.preventDefault();
        dispatch(getProduct());
    }

    return (
        <div className={s.nav}>
            <div>

              <Link to='/' >  <Logo/> </Link>
            <div>
                <button onClick={handleClick}>    
                <VscDebugRestart/></button>
            </div>
            <div>
                < BuscarProducto />
            </div>
            <div><FilterPrice/></div>
            </div>
            <div className={s.cards} >
                {
                    allProduct?.length === 0 ?
                        <div className={s.Cargando}>
                            <h1>Cargando</h1>
                        </div>
                        :
                        allProduct.map((el, i) => {
                            return (
                                <>
                                    <div>
                                        <Card key={"card" + i} name={el.name} image={el.image} price={el.price} />
                                    </div>
                                </>
                            )
                        })
                }

            </div>
        </div>
    )
}