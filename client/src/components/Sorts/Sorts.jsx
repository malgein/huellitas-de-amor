import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { orderByWeight, orderByRace, orderByAge } from '../../redux/actions'
import styles from './Sorts.module.css'


const Sorts = () => {

	const dispatch = useDispatch()

  const pets = useSelector((state) => state.pets)

  const handleWords = e => {
    dispatch(orderByRace(e.target.value))
    // console.log(pets)
  }

  const handleWeight = e => {
		dispatch(orderByWeight(e.target.value))
    // console.log(pets)
  }

  const handleAge = e => {
		dispatch(orderByAge(e.target.value))
    // console.log(pets)
  }

  return (
  <div className={styles.orders}>
      <div className={styles.orderSelect}>
        <h5>Ordenar alfabeticamente</h5>
        <select multiple onChange={handleWords}>
          <option value='defecto'>Defecto</option>
          <option value='ascendente'>A - Z</option>
          <option value='descendente'>Z - A</option>
        </select>
      </div>
      <div className={styles.orderSelect}>
        <h5>Ordenar por peso</h5>
        <select multiple onChange={handleWeight}>
          <option value='defecto'>Defecto</option>
          <option value='ascendente'>Ascendente</option>
          <option value='descendente'>Descendente</option>
        </select>
      </div>
      <div className={styles.orderSelect}>
        <h5>Ordenar por edad</h5>
        <select multiple onChange={handleAge}>
          <option value='defecto'>Defecto</option>
          <option value='ascendente'>Ascendente</option>
          <option value='descendente'>Descendente</option>
        </select>
      </div>
    </div>

  )
}

export default Sorts