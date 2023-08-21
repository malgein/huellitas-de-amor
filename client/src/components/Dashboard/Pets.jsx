import React, {useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import Dashboardview from './DashboardView'
import { useSelector, useDispatch } from 'react-redux'
import { getMascotas, deletePets, editPets } from '../../redux/actions'
import Swal from 'sweetalert2'
import { DeleteIcon } from './DeletIcon'


function Pets() {

  const mascotas = useSelector(state => state.mascotas)

  const dispatch = useDispatch()

  const [petDeleted , setPetDeleted] = useState(true)

  useEffect(() => {
    if(petDeleted){
      dispatch(getMascotas())
      setPetDeleted(false)
    }
  },[dispatch, petDeleted])

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Seguro que quieres eliminar a la mascota?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('mascota borrada con exito', '', 'success')
        setPetDeleted(!petDeleted)
        dispatch(deletePets(id))
        console.log(petDeleted)
      } else if (result.isDenied) {
        Swal.fire('La mascota no ha sido borrada', '', 'info')
      }
    })
  }
  

  return (
    <div className='flex overflow-scroll'>
			<div className="flex overflow-scroll ">
        <div className="basis-[12%] h-[100vh]">
          {/* Necesario que para que se vea el sidebar en la gestion de las mascotas */}
					<Sidebar />
        </div>
        <div className="basis-[88%] border overflow-scroll h-[100vh]">
           {/* Muestra un searchbar, mensajes, nombre y perfil del admin */}
						<Dashboardview />
					<div>
          <div className="flex justify-center">
      <div className="w-full px-4 py-2">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4">Imagen</th>
              <th className="py-2 px-4">Nombre</th>
              <th className="py-2 px-4">Edad</th>
              <th className="py-2 px-4">Sexo</th>
              <th className="py-2 px-4">Tamano</th>
              <th className="py-2 px-4">Raza</th>
              <th className="py-2 px-4">Peso</th>
              <th className="py-2 px-4">Borrar</th>
            </tr>
          </thead>
          <tbody>
            {mascotas?.map((item) => (
              <tr key={item.id} className="border-b border-gray-200">
                <td className="py-2 px-4"><img src={item.foto} alt='item.name' /> </td>
                <td className="py-2 px-4">{item.nombre}</td>
                <td className="py-2 px-4">{item.edad}</td>
                <td className="py-2 px-4">{item.sexo}</td>
                <td className="py-2 px-4">{item.tamano}</td>
                <td className="py-2 px-4">{item.raza}</td>
                <td className="py-2 px-4">{item.peso}</td>
                <td className="py-2 px-4" onClick={() => handleDelete(item.id)}><DeleteIcon /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
          </div>
        </div>
      </div>
		</div>
  )
}

export default Pets