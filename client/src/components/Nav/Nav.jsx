import React, { useState, useEffect } from "react";
import styles from "./nav.module.css";
// import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Notificaciones from "../Notificaciones/Notificaciones";

import logoPrueba from "../../assets/LogoPrueba.jpg";
import {
  Link,
  Button,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import AvatarImg from "../AvatarImg/AvatarImg";

// import { addToFavs, removeFromFavs } from "../../redux/actions";

const Nav = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [size, setSize] = React.useState("md");
  const sizes = ["2xl"];

  const location = useLocation();
  //style

  const mostarSearchBar = location.pathname === "/";
  const [modalabierto, setModalAbierto] = useState(false);

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  // const abrirModal = () => {
  //   setModalAbierto(true);
  // };

  // const CerrarModal = () => {
  //   setModalAbierto(false);
  // };

  //Por aqui unos cambios

  return (
    //"flex flex-col justify-center border-b shadow-lg my-2 w-screen"
    <div className="flex flex-col justify-center border-b shadow-lg w-screen">
      <div className="flex justify-between gap-4 flex-row">
        <div className="ml-2 flex items-center">
          <Link href="/">
            <Image
              width={100}
              height={100}
              alt="NextUI hero Image"
              src={logoPrueba}
            />
          </Link>
        </div>

        <div className=" gap-20 flex flex-row justify-center items-center text-black">
          <Link className="text-lg text-black" href="/">
            Inicio
          </Link>
          <Link href="/perfil/${id}" className="text-lg text-black">
            Mi Perfil
          </Link>

          <div className="flex flex-wrap justify-center gap-3">
            {sizes.map((size) => (
              <Link
                // href="/notificaciones"
                color="primary"
                variant="solid"
                key={size}
                onPress={() => handleOpen(size)}
                className="text-lg text-black"
              >
                Notificaciones
              </Link>
            ))}
          </div>

          {/* <Link
            href="/notificaciones"
            onClick={abrirModal}
            className="text-black"
          >
            Notificaciones
          </Link> */}

          {/* <div>
            <Link href="/agregar">
              <Button
                className="border border-black text-black bg-white hover:bg-slate-100"
                color="primary"
              >
                Crear Nueva Mascota
              </Button>
            </Link>
          </div> */}
        </div>

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

        <Modal size={size} isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent className="flex flex-col items-center ">
            <Notificaciones />
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default Nav;
