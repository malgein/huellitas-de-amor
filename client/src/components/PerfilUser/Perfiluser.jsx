import React, { useState } from "react";
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
import { useEffect } from "react";

const Perfil = () => {
  const [EsOpen, setEsOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [size, setSize] = React.useState("md");
  const sizes = ["2xl"];

  const [perfil, setPerfil] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    nacionalidad: "",
    ubicacion: "",
    direccion: "",
    telefono: "",
    acerca: "",
  });

  useEffect(() => {
    // Simula cargar los datos del perfil desde el servidor
    const cargarPerfil = async () => {
      try {
        const response = await axios.get("http://localhost:3001/perfil"); // Cambia la URL según tu servidor
        if (response.status === 200) {
          setPerfil(response.data);
        }
      } catch (error) {
        console.error("Error al cargar el perfil:", error);
      }
    };

    cargarPerfil();
  }, []);


  const handleSubmit = async (values) => {
    try {
      // Realiza una solicitud PUT al backend para actualizar el perfil
      const response = await axios.put("http://localhost:3001/perfil", values); // Cambia la URL según tu servidor

      if (response.status === 200) {
        console.log("Perfil actualizado con éxito");

        // Actualiza el estado del perfil con los nuevos datos
        setPerfil(values);

        // Cierra el modal de edición
        setEsOpen(false);
      }
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
      // Maneja el error de alguna manera (mostrar un mensaje de error, etc.)
    }
  };

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  return (
    <div className="flex justify-center h-[700px] ">
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
            <h1>Juan Pérez</h1>
            <p className=" text-slate-400">Buenos Aires, Argentina</p>
          </div>
        </div>
        <div className="mt-8 ml-2 flex flex-col text-start ">
          <h2>Acerca de Mí</h2>
          <p>
            ¡Hola! Soy Juan, un amante de los animales. Adopté a mi compañero
            peludo hace 3 años y nuestra vida juntos ha sido increíble. Me
            encanta pasear, jugar y disfrutar de momentos especiales con él.
            Estamos buscando una nueva amiga peluda para unirse a nuestra
            familia. ¡Siempre estoy emocionado por conocer nuevas mascotas y
            darles un hogar lleno de amor!
          </p>
        </div>
        <div className="mt-8 mb-3 ml-2 text-start">
          <h2>Contacto</h2>
          <p className=" text-slate-400">
            Correo electrónico: juan.perez@example.com
          </p>
          <p className=" text-slate-400">Teléfono: (123) 456-7890</p>
          <p className=" text-slate-400">Redes sociales: @juanperez</p>
        </div>
        <div className="mb-3 ml-2">
          {/* <Button
          color="primary"
          variant="solid"
          // onClick={toggleFormulario}
          onPress={onOpen}
        >
          Editar perfil
        </Button> */}

          <div className="flex flex-wrap justify-center gap-3">
            {sizes.map((size) => (
              <Button
                color="primary"
                variant="solid"
                key={size}
                onPress={() => handleOpen(size)}
                onClick={() => setEsOpen(true)}
              >
                Editar perfil
              </Button>
            ))}
          </div>

          <Modal size={size} isOpen={isOpen} onOpenChange={() => setEsOpen(false)}>
            <ModalContent>
              <ModalHeader className="flex flex-col gap-1">
                Actualizar Perfil
              </ModalHeader>
              <EditarPerfil onSubmit={handleSubmit} initialValor={perfil} />
            </ModalContent>
          </Modal>

          {/* <button>Editar Perfil</button> */}
        </div>

        {mostrarFormulario && <EditarPerfil />}
      </div>
    </div>
  );
};

export default Perfil;
