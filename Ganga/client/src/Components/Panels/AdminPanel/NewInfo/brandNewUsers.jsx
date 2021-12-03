import React from "react";
import s from "../admin.module.css";
import { GrView } from "react-icons/gr";

export default function BrandNewUsers() {
  return (
    <div className={s.newUsersContainer}>
      <div className="py-5 text-center">
        <span className="text-2xl ">Usuarios nuevos</span>
      </div>
      <ul>
        <li className={s.newUser}>
          <div className="pl-10 flex flex-col text-center">
            <span className="pt-5 text-base">Juan Ortega</span>
            <span className="pt-1 text-base">jOrt@gmail.com</span>
          </div>
          <button className="mr-16 mt-4 border-2 px-2 bg-white py-1 rounded-md">
            {" "}
            <GrView />{" "}
          </button>
        </li>
        <li className={s.newUser}>
          <div className="pl-5 flex flex-col text-center">
            <span className="pt-5 text-base">Marcos Monzon</span>
            <span className="pt-1 text-base">MyM@gmail.com</span>
          </div>
          <button className="mr-16 mt-4 border-2 px-2 bg-white py-1 rounded-md">
            {" "}
            <GrView />{" "}
          </button>
        </li>
      </ul>
    </div>
  );
}
