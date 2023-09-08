import React from 'react'
import Sidebar from './Sidebar'


import { Outlet } from 'react-router-dom';

//Este es el componente del dashboard principal
const DashboardSuperAdmin = () => {

	return (
		<div className='flex overflow-scroll'>
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
						<h1>Bienvenido Admind</h1>
						<h1>Nombre del admin</h1>
						<h1>Correo del admin</h1>
          </div>
        </div>
      </div>
		</div>
	)
}

export default DashboardSuperAdmin