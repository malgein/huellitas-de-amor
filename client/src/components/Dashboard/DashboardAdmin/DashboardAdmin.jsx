import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "../../../context/authContext";

//Este es el componente del dashboard principal
const DashboardAdmin = () => {
  const { usuario } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    // if(!user){
    // 	navigate('/registro')
    // }
  }, []);

  return (
    <div className="flex overflow-scroll">
      {/* {console.log(user)} */}
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
            <div>
							<h1>Nombre: {usuario.nombre}</h1>
							<h1>Correo: {usuario.email}</h1>
						</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
