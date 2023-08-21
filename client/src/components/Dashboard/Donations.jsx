import React, {useEffect} from 'react'
import Sidebar from './Sidebar'
import Dashboardview from './DashboardView'
import {useSelector, useDispatch} from 'react-redux'
import { getDonations } from '../../redux/actions'


function Donations() {

  const donaciones = useSelector(state => state.donaciones)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDonations())
  }, [dispatch])

  return (
    <div>
          <div className='flex overflow-scroll'>
			<div className="flex overflow-scroll ">
        <div className="basis-[12%] h-[100vh]">
          {/* Necesario que para que se vea el sidebar en la gestion de las donaciones */}
					<Sidebar />
        </div>
        <div className="basis-[88%] border overflow-scroll h-[100vh]">
           {/* Muestra un searchbar, mensajes, nombre y perfil del admin */}
						<Dashboardview />
					<div>
            Soy la gestion de donaciones
            {/* {console.log(donaciones)} */}
          </div>
        </div>
      </div>
		</div>
    </div>
  )
}

export default Donations