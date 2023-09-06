import React, { useState, useEffect } from "react";
import {
  Button,
  Link,
  Modal,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import FotoPerfil from "./FotoPerfil";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import FotoPortada from "./FotoPortada";

const BotonPortada = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [usuario, setUsuario] = useState(null);
  const [abrirFotoPerfil, setAbrirFotoPerfil] = useState(false);
  const { id } = useParams();
  const [userModified, setUserModified] = useState(true);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  //Para el tamaño del modal
  const [size, setSize] = React.useState("md");
  const sizes = ["2xl"];
  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  const [perfil, setPerfil] = useState({
    imagenPortada: "",
  });

  // Definir una función para actualizar el estado del usuario
  const updateUser = (newUserData) => {
    setUsuario(newUserData);
  };

  const dispatchRedux = () => {
    Navigate("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/perfil/${id}`); // Reemplaza con tu URL de la API
        const userData = response.data;

        // Actualiza el estado del usuario y las URLs de las imágenes
        setUsuario(userData);
        setPerfil({
          nombre: userData.nombre || "",
          apellido: userData.apellido || "",
          nacionalidad: userData.nacionalidad || "",
          ubicacion: userData.ubicacion || "",
          direccion: userData.direccion || "",
          telefono: userData.telefono || "",
          acerca: userData.acerca || "",
          email: userData.email || "",
          password: userData.password || "",
          imagenPortada: userData.imagenPortada || "",
          imagenPerfil: userData.imagenPerfil || "",
        });
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <Link
        key={size}
        onPress={() => handleOpen(size)}
        onClick={() => setAbrirFotoPerfil(true)}
        className="rounded-full flex justify-center "
      >
        <i className="fa-solid fa-camera"></i>
      </Link>

      <Modal
        size="2xl"
        isOpen={abrirFotoPerfil}
        onOpenChange={() => setAbrirFotoPerfil(false)}
      >
        <ModalContent>
          <FotoPortada
            id={id}
            updateUser={updateUser}
            setUserModified={setUserModified}
            perfil={perfil}
            setPerfil={setPerfil}
          />
        </ModalContent>
      </Modal>
    </div>
  );
};

export default BotonPortada;
