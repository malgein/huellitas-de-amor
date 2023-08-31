import React, { useState, useEffect } from "react";
// import styles from "./perfil.module.css";
import {
  Link,
  Button,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import fotoPerfil from "../../assets/fotoPerfil.jpg";
import EditarPerfil from "../EditarPerfil/EditarPerfil";
import axios from "axios";
import { useParams } from "react-router-dom";

const Perfil = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [size, setSize] = React.useState("md");
  const sizes = ["2xl"];
  const [usuario, setUsuario] = useState(null);

  const { id } = useParams();

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  // useEffect(() => {
  //   // Hacer una solicitud al servidor para obtener la información del usuario
  //   axios
  //     .get(`http://localhost:3001/usuario/${id}`) // Reemplaza con tu ruta real
  //     .then((response) => {
  //       setUsuario(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error al obtener la información del usuario:", error);
  //     });
  // }, [id]);

  return (
    <div className="flex justify-center h-[700px] ">
      {usuario && (
        <div className="border-2 max-w-3xl rounded-2xl shadow-lg  ml-2 mt-10 mb-unit-8">
          <div className="flex flex-row items-center gap-5 ml-2 mt-8">
            <Image
              width={120}
              height={120}
              src={fotoPerfil}
              alt="Foto de perfil"
              className="border-2 rounded-full"
            />
            <div className="flex flex-col ">
              <h1>Nombre: {usuario.nombre}</h1>
              <h1>Apellido{usuario.apellido}</h1>
              <h1>Apellido{usuario.email}</h1>

              <p className=" text-slate-400">
                Buenos Aires, Argentina {usuario.ubicacion}
              </p>
            </div>
          </div>
          <div className="mt-8 ml-2 flex flex-col text-start ">
            <h2>Acerca de Mí</h2>
            <p>aqui hay algo{usuario.acerca}</p>
          </div>
          <div className="mt-8 mb-3 ml-2 text-start">
            <h2>Contacto</h2>
            <p className=" text-slate-400">
              Correo electrónico:{usuario.email}
            </p>
            <p className=" text-slate-400">Teléfono: {usuario.telefono}</p>
            <p className=" text-slate-400">Dirección: {usuario.direccion}</p>
          </div>
          <div className="mb-3 ml-2">
            <div className="flex flex-wrap justify-center gap-3">
              {sizes.map((size) => (
                <Button
                  color="primary"
                  variant="solid"
                  key={size}
                  onPress={() => handleOpen(size)}
                >
                  Editar perfil
                </Button>
              ))}
            </div>

            <Modal size={size} isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                <ModalHeader className="flex flex-col gap-1">
                  Actualizar Perfil
                </ModalHeader>
                <EditarPerfil />
              </ModalContent>
            </Modal>

            {/* <button>Editar Perfil</button> */}
          </div>

          {mostrarFormulario && <EditarPerfil />}
        </div>
      )}
    </div>
  );
};

export default Perfil;
