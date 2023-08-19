import React from 'react'
import Sidebar from './Sidebar'
import Dashboardview from './DashboardView'
import { Outlet } from 'react-router-dom';

//Este es el componente del dashboard principal
const Dashboard = () => {
	return (
		<div className='flex overflow-scroll'>
			<div className="flex overflow-scroll ">
        <div className="basis-[12%] h-[100vh]">
					<Sidebar />
        </div>
        <div className="basis-[88%] border overflow-scroll h-[100vh] w-[100%]">
						<Dashboardview />
					<div>
						{/* El elemento Outlet es necesario para poder navegar en subrutas */}
						<Outlet></Outlet>
						<h1>Bienvenido Admind</h1>
          </div>
        </div>
      </div>
		</div>
	)
}

export default Dashboard