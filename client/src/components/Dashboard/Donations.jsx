import React from 'react'
import Sidebar from './Sidebar'
import Dashboardview from './DashboardView'

function Donations() {
  return (
    <div>
          <div className='flex overflow-scroll'>
			<div className="flex overflow-scroll ">
        <div className="basis-[12%] h-[100vh]">
					<Sidebar />
        </div>
        <div className="basis-[88%] border overflow-scroll h-[100vh]">
						<Dashboardview />
					<div>
            Soy la gestion de donaciones
          </div>
        </div>
      </div>
		</div>
    </div>
  )
}

export default Donations