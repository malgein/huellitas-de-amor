import React, { useState, useEffect } from "react";
import styles from "./nav.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
	Button 
} from "@nextui-org/react";
import {MdOutlinePets} from 'react-icons/md'
// import { addToFavs, removeFromFavs } from "../../redux/actions";

const Nav = () => {
  const location = useLocation();


  const mostarSearchBar = location.pathname === "/home";

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
          <Link to="/notificaciones" onClick={abrirModal}>
            Notificaciones
          </Link>

          {/* <button onClick={abrirModal}>Notificaciones</button> */}
        </div>
        {/* <div className={styles.agregar}>
          <Link to="/agregar">Agrega tu Mascota</Link>
        </div> */}
        <div className={styles.divlogin}>
          {/* <Link className={styles.regis} to="/login">
            Registrarse
          </Link>
          <Link className={styles.iniciosesion} to="/login">
            Iniciar sesion
          </Link> */}
          <div>
            {mostarSearchBar && (
              <div className={styles.divsearchbar}>
                <SearchBar />
              </div>
            )}
          </div>
          <div className={styles.fuent}>
            <Link className={styles.agregar} to="/agregar">
              <Button color="success">Crear Nueva Mascota</Button>
            </Link>
          </div>
        </div>
				<Dropdown>
      		<DropdownTrigger>
						<Button color='secondary' variant='shadow'>
          		Cesta de Adopcion<MdOutlinePets />
							{10}
						</Button>
      		</DropdownTrigger>
      		<DropdownMenu aria-label="Static Actions">
						<DropdownItem key="empty">Tu esta esta vacia</DropdownItem>
     		 	</DropdownMenu>
   		 	</Dropdown>
      </div>


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
