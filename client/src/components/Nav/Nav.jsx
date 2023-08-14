import React, { useState } from "react";
import styles from "./nav.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";


const Nav = () => {
  const location = useLocation();
  const [modalabierto, setModalAbierto] = useState(false);

  const abrirModal = () => {
    setModalAbierto(true);
  };

  const CerrarModal = () => {
    setModalAbierto(false);
  };

  //Por aqui unos cambios

  return (
    <div className={styles.divnav}>
      <div className={styles.divcontainer}>
        <div className={styles.divlogo}>
          {/* <img src="../../assets/LogoPrueba.jpg" alt="Imagen" /> */}
          {/* <h1>Huellitas de amor</h1> */}
        </div>
        <div className={styles.nav}>
          <Link to="/home">Inicio</Link>
          <Link to="/perfil">Mi Perfil</Link>
          <Link to="/detail">Detalle</Link>
          <Link to="/notificaciones" onClick={abrirModal}>
            Notificaciones
          </Link>

          {/* <button onClick={abrirModal}>Notificaciones</button> */}
        </div>
        <div className={styles.divlogin}>
          <Link className={styles.regis} to="/login">
            Registrarse
          </Link>
          <Link className={styles.iniciosesion} to="/login">
            Iniciar sesion
          </Link>
        </div>
      </div> <SearchBar />




      {modalabierto && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2 className={styles.notih2}>Notificaciones</h2>
            <ul class={styles.notificationlist}>
              <li>
                <div class={styles.notification}>
                  <div class={styles.notificationinfo}>
                    <span class={styles.notificationtitle}>
                      Nueva notificación 1
                    </span>
                    <br />
                    <span class={styles.notificationtime}>Hace 1 hora</span>
                  </div>
                  <button class={styles.notificationaction}>Ver</button>
                </div>
              </li>
              <li>
                <div class={styles.notification}>
                  <div class={styles.notificationinfo}>
                    <span class={styles.notificationtitle}>
                      Nueva notificación 2
                    </span>
                    <br />
                    <span class={styles.notificationtime}>Hace 3 hora</span>
                  </div>
                  <button class={styles.notificationaction}>Ver</button>
                </div>
              </li>
              <li>
                <div class={styles.notification}>
                  <div class={styles.notificationinfo}>
                    <span class={styles.notificationtitle}>
                      Nueva notificación 3
                    </span>
                    <br />
                    <span class={styles.notificationtime}>Hace 5 hora</span>
                  </div>
                  <button class={styles.notificationaction}>Ver</button>
                </div>
              </li>
            </ul>
            <button className={styles.close} onClick={CerrarModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
