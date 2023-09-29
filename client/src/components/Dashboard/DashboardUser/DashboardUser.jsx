import React from 'react'
import Sidebar from './Sidebar'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';

import { Outlet } from 'react-router-dom';

//Este es el componente del dashboard principal
const DashboardUser = () => {
	// const usuarios = useSelector(state => state.usuarios)
	// const { user, isAuthenticated, isLoading } = useAuth0(); // Obtiene información del usuario de Auth0

	// useEffect(() => {
	// 	// Puedes realizar acciones adicionales aquí después de obtener la información del usuario
	// 	if (isAuthenticated) {
	// 		console.log("Usuario autenticado:", user);
	// 	}
	// }, [isAuthenticated, user]);

	// if (isLoading) {
	// 	// Muestra una carga o pantalla de inicio de sesión mientras Auth0 verifica la autenticación
	// 	return <div>Cargando...</div>;
	// }

	return (
		<div className='flex overflow-scroll'>
			<div className='flex overflow-scroll '>
				<div className='basis-[12%] h-[100vh]'>
					{/* Necesario que para que se vea el sidebar en la gestion de las casas de adopcion */}
					<Sidebar />
				</div>
				<div className='basis-[88%] border overflow-scroll h-[100vh] w-[100%]'>
					{/* Muestra un searchbar, mensajes, nombre y perfil del admin */}
					<div>
						{/* El elemento Outlet es necesario para poder navegar en subrutas del dashboard*/}
						<Outlet></Outlet>
						{isAuthenticated ? (
							<div>
								<h1>Nombre: {user.name}</h1>
								<h1>Correo: {user.email}</h1>
							</div>
						) : (
							<h1>No autenticado</h1>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default DashboardUser