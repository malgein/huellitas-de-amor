//Dependencias
import React from 'react'
import { Link } from 'react-router-dom'
//Estilos
import styles from './Error404.module.css'
import Dog from './Dog-Transparent-Background.png'

const Error404 = () => {
  return (
    <div className={styles.error}>
      <div className={styles.sky}>
        <h2><span>4</span><span>0</span><span>4</span></h2>
        <div className={styles.grass}></div>
        <img src={Dog} alt='dog worried' className={styles.dog}/>
      </div>
      <div className={styles.field}>
        <h2>Opps... Parece que te perdiste.
          No encontraras nada aqui  
        </h2>
        <Link className={styles.linkError} to='/'>Volver a la Home</Link>
      </div>
    </div>
  )
}

export default Error404