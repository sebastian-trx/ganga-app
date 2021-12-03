import React from "react";
import j from "./footer.module.css";

export default function FooterPage() {
  return (
    <div className={j.body}>
      <div fluid="true" className="text-center text-md-left">
        <div>
          <div>
            <h5 className={j.titulo}>GanGa</h5>
            <h5 className={j.eslogan}>Un producto para cada día</h5>
          </div>
          <div>
            <ul>
              <h1 className={j.tuEres}>Tú eres importante</h1>
            </ul>
            <li className={j.texTuEres}>
              <h3>Para nosotros es muy grato que estés aquí</h3>
              <h3>Navega y encuentra lo que quieras</h3>
              <h3>De buena calidad y al mejor precio.</h3>
            </li>
          </div>
          <div>
            <ul>
              <h1 className={j.vender}>Puedes vender tus productos</h1>
            </ul>
            <li className={j.textVender}>
              <h3>De una forma sencilla puedes convertirte en vendedor</h3>
              <h3>en una plataforma que te garantiza un buen soporte</h3>
              <h3>además de que tendrás asesoria en caso de requerirla.</h3>
            </li>
          </div>
          <div>
            <ul>
              <h1 className={j.ubicacion}>Estamos ubicados</h1>
            </ul>
            <li className={j.textUbicacion}>
              <h3>En toda la Argentina</h3>
              <h3>Próximamente en Colombia</h3>
            </li>
          </div>
        </div>
      </div>
      <div className={j.copyright}>
        <div fluid="true">
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://ganga-app-78mh2uop7-eze-yisus.vercel.app/catalogo">
            {" "}
            GanGa{" "}
          </a>
        </div>
      </div>
    </div>
  );
}