import React,{useEffect} from 'react'
import Sidebar from './Sidebar'
import { useAuth } from "../../../../../server/src/context/AuthContext";
import { Outlet, useNavigate } from 'react-router-dom';

//Este es el componente del dashboard principal
const DashboardAdmin = () => {

	const { user, actualUser } = useAuth();

	const navigate = useNavigate()

	useEffect(() => {
		console.log(actualUser)
	},[user])
	return (
		<div className='flex overflow-scroll'>
			<div className="flex overflow-scroll ">
        <div className="basis-[12%] h-[100vh]">
			{/* Necesario que para que se vea el sidebar en la gestion de las casas de adopcion */}
			{user && (

					<Sidebar />
			)}
        </div>
        <div className="basis-[88%] border overflow-scroll h-[100vh] w-[100%]">
			 {/* Muestra un searchbar, mensajes, nombre y perfil del admin */}
					<div>
						{/* El elemento Outlet es necesario para poder navegar en subrutas del dashboard*/}
						<Outlet></Outlet>
          </div>
        </div>
      </div>
		</div>
	)
}

export default DashboardAdmin