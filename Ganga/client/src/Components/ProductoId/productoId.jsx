import React from "react";
import Nav from '../../Components/Nav/NavBar/nav'
import a from './productoId.module.css'

export default function ProductId() {
    const detail = [{
        name: "Notebook Hp 14-dq2024la",
        description: "Core I3 1115g4 8gb 256gb M2 Ssd W10,  pantalla de 14'', Duración de la batería 9 h  ",
        price: "20",
        stock: 4,
        image:
            "https://http2.mlstatic.com/D_NQ_NP_962681-MLA47729250270_102021-O.webp",
    }]

    return (
        <div >
            <Nav />
            <div className={a.todo}>
                <div className={a.container}>
                    {
                        detail.map((el, i) => {
                            return (
                                <>
                                    <div className={a.derecho}>
                                        <div className={a.div1}>
                                            <img src={el.image} className={a.img} alt="" />
                                        </div>
                                        <div className={a.div2}>
                                            <div className={a.name}>
                                                <h1>{el.name}</h1>
                                            </div >
                                            <div className={a.descrip}>
                                                <p>{el.description}</p>
                                            </div>
                                            <div className={a.start}>⭐⭐⭐⭐⭐</div>
                                            <div className={a.price}>
                                                <h2>$ {el.price} usd</h2>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={a.izq}>
                                        <div className={a.pago}>
                                            <h3>  DESCRIPCION DEL PAGO</h3>
                                        </div>
                                        <div className={a.div3}>
                                            <button className={a.bnt}>Comprar</button>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )

}