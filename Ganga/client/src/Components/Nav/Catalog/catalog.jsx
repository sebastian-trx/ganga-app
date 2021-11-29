import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, orderByPrice } from "../../Redux/Actions/actions";
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
    const [/*orden*/, setOrden] = useState('')

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])


    function handleClick(e) {
        e.preventDefault();
        dispatch(getProduct());
    }



    function handleOrder(e) {
        e.preventDefault();
        dispatch(orderByPrice(e.target.value));
        setOrden(`Ordenado ${e.target.value}`);
    }

    return (
        <div className={s.nav}>
            <div>
           

                <Link to='/' >
                <div >
                      <Logo /> 
                      </div>
                      </Link>
                <div >
                    <button onClick={handleClick}>
                        <VscDebugRestart /></button>
                </div>
                <div>
                    < BuscarProducto />
                </div>
                <div><FilterPrice /></div>
                <div>  <div>
                    <select onChange={(e) => handleOrder(e)} >
                        <option value='All'> Orden por Precio: </option>
                        <option value='Menor-Mayor'> Mayor a Menor </option>
                        <option value='Mayor-Menor'> Menor a Mayor </option>
                    </select>
                </div></div>
            
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
                                    <div key={"card" + i} >
                                        <Card  name={el.name} image={el.image} price={el.price} id={el.id} />
                                    </div>
                                </>
                            )
                        })
                }

            </div>
        </div>
    )
}