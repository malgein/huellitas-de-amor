import React, { useState, useEffect } from "react";
import styles from "./nav.module.css";
// import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import logoPrueba from "../../assets/LogoPrueba.jpg";

import { Link, Button, Image } from "@nextui-org/react";
import Registro from "../Registro/Registro";
import AvatarImg from "../AvatarImg/AvatarImg";

// import { addToFavs, removeFromFavs } from "../../redux/actions";

const Nav = () => {
  const location = useLocation();
  //style

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
    //"flex flex-col justify-center border-b shadow-lg my-2 w-screen"
    <div className="flex flex-col justify-center border-b shadow-lg w-screen">
      <div className="flex justify-between gap-4 flex-row">
        <div className="ml-2 flex items-center">
          <Image
            width={100}
            height={100}
            alt="NextUI hero Image"
            src={logoPrueba}
          />
        </div>

        <div className=" gap-20 flex flex-row justify-center items-center text-black">
          <Link className="text-black" href="/home">
            Inicio
          </Link>
          <Link href="/perfil" className="text-black">
            Mi Perfil
          </Link>

          <Link
            href="/notificaciones"
            onClick={abrirModal}
            className="text-black"
          >
            Notificaciones
          </Link>

          <div>
            <Link href="/agregar">
              <Button
                className="border border-black text-black bg-white hover:bg-slate-100"
                color="primary"
              >
                Crear Nueva Mascota
              </Button>
            </Link>
          </div>
        </div>

        {/* <div className="gap-4 flex flex-row items-center mr-4">
          <Link href="/registro" className="text-black">
            <Button
              className="border border-black text-black bg-white hover:bg-slate-100  "
              color="primary"
            >
              Registrarse
            </Button>
          </Link>
          <Link to="/login">
            <Button className="text-white bg-black">Iniciar sesión</Button>
          </Link>
          </div> */}

        <div className="flex flex-row items-center">
          {mostarSearchBar && (
            <div className="mr-6">
              <SearchBar />
            </div>
          )}
          <div className="mr-9">
            {" "}
            <AvatarImg />
          </div>
        </div>
      </div>

      {modalabierto && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2 className={styles.notih2}>Notificaciones</h2>
            <ul className={styles.notificationlist}>
              <li>
                <div className={styles.notification}>
                  <div className={styles.notificationinfo}>
                    <span className={styles.notificationtitle}>
                      Nueva notificación 1
                    </span>
                    <br />
                    <span className={styles.notificationtime}>Hace 1 hora</span>
                  </div>
                  <button className={styles.notificationaction}>Ver</button>
                </div>
              </li>
              <li>
                <div className={styles.notification}>
                  <div className={styles.notificationinfo}>
                    <span className={styles.notificationtitle}>
                      Nueva notificación 2
                    </span>
                    <br />
                    <span className={styles.notificationtime}>Hace 3 hora</span>
                  </div>
                  <button className={styles.notificationaction}>Ver</button>
                </div>
              </li>
              <li>
                <div className={styles.notification}>
                  <div className={styles.notificationinfo}>
                    <span className={styles.notificationtitle}>
                      Nueva notificación 3
                    </span>
                    <br />
                    <span className={styles.notificationtime}>Hace 5 hora</span>
                  </div>
                  <button className={styles.notificationaction}>Ver</button>
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
