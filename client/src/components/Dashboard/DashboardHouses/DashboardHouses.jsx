import React from "react";
import Sidebar from "./Sidebar";
import {useAuth} from '../../../context/authContext'

import { Outlet } from "react-router-dom";

//Este es el componente del dashboard principal
const DashboardHouses = () => {

  const {house} = useAuth()

  return (
    <div className="flex overflow-scroll">
      <div className="flex overflow-scroll ">
        <div className="basis-[12%] h-[100vh]">
          {/* Necesario que para que se vea el sidebar en la gestion de las casas de adopcion */}
          <Sidebar />
        </div>
        <div className="basis-[88%] border overflow-scroll h-[100vh] w-[100%]">
          {/* Muestra un searchbar, mensajes, nombre y perfil del admin */}
          <div>
            {/* El elemento Outlet es necesario para poder navegar en subrutas del dashboard*/}
            <Outlet></Outlet>
            <h1>Bienvenido </h1>
            <h1>{house?.nombreDeOng}</h1>
            <h1>{house?.email}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHouses;
