import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";



import { useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";

import { Link, Button, Image } from "@nextui-org/react";
import logoPrueba from "../../assets/LogoPrueba.jpg";
import styles from "./nav.module.css";

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
    <div className="flex flex-col justify-center border-b shadow-lg my-2">
      <div className="flex justify-between gap-4 flex flex-row ...">
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
                className="border border-black text-black bg-white hover:bg-slate-100  "
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
      </div>

      <div className="flex justify-center">
        {mostarSearchBar && (
          <div className="flex justify-center w-96 my-2">
            <SearchBar />
          </div>
        )}
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
