import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { orderByWeight,  orderByAge } from '../../redux/actions'



const Sorts = () => {

  const dispatch = useDispatch()
  //Me trae el estado global con el propisito de ver los resultados en la consola cada vez que le aplico un orden
  const mascotas = useSelector((state) => state.pets)

  //Funcion que se dispara al seleccionar la opcion de peso bien sea ascendente o descendente
  const handleWeight = e => {
    dispatch(orderByWeight(e.target.value))
    console.log(mascotas)
  }

  //funcion que se dispara al selccionar las opciones de ordenar por edad bien sea ascendente o descendente
  const handleAge = e => {
    dispatch(orderByAge(e.target.value))
    console.log(mascotas)
  }

  return (
    <div className="flex flex-wrap justify-around pt-5 mt-5 mb-10 orders">
      <div className="flex flex-col">
        <h5 className='mb-0'>Ordenar por peso</h5>
        {/* Orden por peso */}
        <select multiple onChange={handleWeight}
        className="w-11/12 px-4 py-2 border-2 border-gray-300 rounded-md mt-2 focus:outline-none focus:border-blue-500">
          <option value='defecto'>Defecto</option>
          <option value='ascendente'>Ascendente</option>
          <option value='descendente'>Descendente</option>
        </select>
      </div>
      <div className="flex flex-col">
        <h5 className="mb-0">Ordenar por edad</h5>
        {/* Orden por edad */}
        <select multiple onChange={handleAge}
        className="w-11/12 px-4 py-2 border-2 border-gray-300 rounded-md mt-2 focus:outline-none focus:border-blue-500"
        >
          <option value='defecto'>Defecto</option>
          <option value='ascendente'>Ascendente</option>
          <option value='descendente'>Descendente</option>
        </select>
      </div>
    </div>
  )
}

export default Sorts
