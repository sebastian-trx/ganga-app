<<<<<<< Updated upstream
import React, { useState } from "react";

import Nav from "../../Nav/NavBar/nav";
import VendorSidebar from "./vSidebar";
import s from "./vendor.module.css";

export default function VendorPanel() {
  const [productos, verProductos] = useState(false);

  return (
    <div className="bg-gray-100">
      <Nav />
      {!productos ? (
        <div className={s.container}>
          <VendorSidebar productos={productos} verProductos={verProductos} />
          <div className={s.body}></div>
        </div>
      ) : (
        <div className={s.container}>
          <VendorSidebar productos={productos} verProductos={verProductos} />
          <div className={s.body}></div>
=======
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../../Nav/NavBar/nav";
import VendedorSidebar from "./vSidebar";
import InfoUser from './infoUser'
import s from './vPanel.module.css'

export default function VendorPanel() {
    const dispatch = useDispatch();
    const [datos, verDatos] = useState(false);
    const [productos, verProductos] = useState(false);
    const [vendedores, verVendedores] = useState(false);

    return (
        <div className="bg-gray-100">
            <Nav />
            {!vendedores ?
                <div>
                    {!productos ?
                        <div>
                            {!datos ? (
                                <div className={s.container}>
                                    <div>
                                        <VendedorSidebar datos={datos} productos={productos}
                                            verProductos={verProductos} vendedores={vendedores} verVendedores={verVendedores} />
                                    </div>
                                    <div className={s.body}>
                                        <h4 className="text-3xl text-center font-light font-serif p-5">
                                            Info
                                        </h4>
<InfoUser/>
                                        <div className={s.newInfo}>

                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className={s.containerUsuarios}>
                                    <div>
                                        <h1>Holaaa</h1>
                                    </div>
                                    <div className={s.usuariosBody}>
                                        <p>HOLAAA</p>
                                    </div>
                                </div>
                            )}
                        </div>
                        :
                        <div className={s.containerProductos}>
                            <div>
                                <p>Hola</p>
                            </div>
                            <div className={s.productosBody}>
                                <p>HOLA</p>
                            </div>
                        </div>
                    }
                </div>
                :
                <div className={s.containerVendedores}>
                    <div>
                        <h2>knfelinfpi</h2>
                    </div>
                    <div className={s.vendedoresBody}>
                        <h1>fenbkufbd</h1>
                    </div>
                </div>}
>>>>>>> Stashed changes
        </div>
      )}
    </div>
  );
}
