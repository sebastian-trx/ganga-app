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
        </div>
      )}
    </div>
  );
}
