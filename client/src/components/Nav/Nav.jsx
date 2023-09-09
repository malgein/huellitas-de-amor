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
import { useAuth0 } from "@auth0/auth0-react";

// import { addToFavs, removeFromFavs } from "../../redux/actions";

const Nav = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [size, setSize] = React.useState("md");
  const sizes = ["2xl"];
  const { user, isAuthenticated } = useAuth0();
  const location = useLocation();
  //style

  const mostarSearchBar = location.pathname === "/";
  const [modalabierto, setModalAbierto] = useState(false);

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

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
          {isAuthenticated ? (
            <Link href={`/perfil/${user.id}`} className="text-lg text-black">
              Mi Perfil
            </Link>
          ) : (
            ""
          )}
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
