import React from 'react'
import Sidebar from './Sidebar'
import Dashboardview from './DashboardView'


function Users() {
  return (
    <div className='flex overflow-scroll'>
			<div className="flex overflow-scroll ">
        <div className="basis-[12%] h-[100vh]">
					<Sidebar />
        </div>
        <div className="basis-[88%] border overflow-scroll h-[100vh]">
						<Dashboardview />
					<div>
            Soy la gestion de Usuarios
          </div>
        </div>
      </div>
		</div>
  )
}

export default Users