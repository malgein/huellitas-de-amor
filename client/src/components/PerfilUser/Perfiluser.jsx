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
  User,
} from "@nextui-org/react";
import fotoPerfil from "../../assets/fotoPerfil.jpg";
import EditarPerfil from "../EditarPerfil/EditarPerfil";
import axios from "axios";
import { useParams } from "react-router-dom";
import SubirImagenes from "../SubirImagenes/SubirImagenes";
import { useSelector } from "react-redux";

const Perfil = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [size, setSize] = React.useState("md");
  const sizes = ["2xl"];
  const [usuario, setUsuario] = useState(null);
  const [imagenPortada, setImagenPortada] = useState("");

  const { id } = useParams();

  const [perfil, setPerfil] = useState({
    imagenPortada: "",
    imagenPerfil: "",
  });

  // const handleEliminarImagenPortada = () => {
  //   setPerfil({ ...perfil, imagenPortada: "" });
  // };

  const handleEliminarImagenPerfil = () => {
    setPerfil({ ...perfil, imagenPerfil: "" });
  };

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  const updateUser = (newUserData) => {
    setUsuario(newUserData);
  };

  const [abrir, setAbrir] = useState(false);

  const handleCambioImagenPortada = () => {
    // Aquí puedes agregar lógica para abrir el componente SubirImagenes
    setAbrir(!abrir);
  };

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  // useEffect(() => {
  //   const storedImagenPortada = localStorage.getItem("imagenPortada");
  //   if (storedImagenPortada) {
  //     setImagenPortada(storedImagenPortada);
  //   }
  // }, []);

  // Función para guardar la imagen de portada en el almacenamiento local
  // const guardarImagenPortada = (imagen) => {
  //   setImagenPortada(imagen);
  //   localStorage.setItem("imagenPortada", imagen);
  // };

  // Función para eliminar la imagen de portada
  // const handleEliminarImagenPortada = () => {
  //   setImagenPortada("");
  //   localStorage.removeItem("imagenPortada");
  // };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/perfil/${id}`) // Suponiendo que el usuario 1 es el que deseas mostrar
      .then((response) => {
        setUsuario(response.data); // Almacena los datos del usuario en el estado
      })
      .catch((error) => {
        console.error("Error al obtener los datos del usuario:", error);
      });
  }, [id]);

  return (
    <div className="flex justify-center  ">
      {usuario ? (
        <div className="border max-w-3xl rounded-2xl shadow-lg  ml-2 mt-10 mb-unit-8 w-[800px]">
          <div className="border-2 rounded-t-lg h-[300px] relative ">
            {/* aqui va una imagen */}
            {perfil.imagenPortada && (
              <img
                src={perfil.imagenPortada}
                alt="Imagen de portada"
                onClick={handleCambioImagenPortada}
                style={{ cursor: "pointer" }}
                className="h-[300px] w-[800px] rounded-t-lg"
              />
            )}
            {!perfil.imagenPortada && (
              <SubirImagenes
                setImagenes={(imagenes) =>
                  setPerfil({
                    ...perfil,
                    imagenPortada: imagenes[0] || "",
                  })
                }
              />
            )}

            <div className="flex flex-col ml-3 max-w-sm mx-auto rounded-xl space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 absolute bottom-[-110px] left-0">
              <div className="border-4 border-white rounded-full w-[180px]">
                {perfil.imagenPerfil && (
                  <Image
                    src={perfil.imagenPerfil}
                    alt="Imagen de portada"
                    onClick={handleCambioImagenPortada}
                    style={{ cursor: "pointer" }}
                    className="border border-white object-cover object-center w-[180px] rounded-full  sm:mx-0 sm:shrink-0"
                  />
                )}
                {!perfil.imagenPerfil && (
                  <SubirImagenes
                    setImagenes={(imagenes) =>
                      setPerfil({
                        ...perfil,
                        imagenPerfil: imagenes[0] || "",
                      })
                    }
                    className=""
                  />
                )}
              </div>

              {/* <Image
                width={120}
                height={120}
                src={fotoPerfil}
                alt="Foto de perfil"
                className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
              /> */}
              <div className="flex flex-col text-lg text-black font-semibold ">
                <h1 className="mb-0">
                  {usuario.nombre + " " + usuario.apellido}
                </h1>

                <p className="text-slate-500 font-light mt-0">
                  Cali, Colombia{usuario.ubicacion}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[120px] ml-3 flex flex-col text-start">
            <h2 className="text-lg text-black font-semibold mb-2">
              Acerca de Mí:
            </h2>
            <p>{usuario.acerca}</p>
          </div>

          <div className="flex flex-row items-center justify-center h-[100px] mt-10 gap-10">
            <div className=" ">
              <p className="text-lg text-black font-semibold">1</p>
              <h4 className="text-slate-500 font-light">Adoptados</h4>
            </div>
            <div className="border-x border-slate-400  px-10">
              {" "}
              <p className="text-lg text-black font-semibold">3</p>
              <h4 className="text-slate-500 font-light">Favoritos</h4>
            </div>
            <div className=" ">
              {" "}
              <p className="text-lg text-black font-semibold">2</p>
              <h4 className="text-slate-500 font-light">Donaciones</h4>
            </div>
          </div>

          <div className="mt-8 mb-3 ml-3 text-start">
            <h2 className="text-lg text-black font-semibold mb-2">
              Contactame
            </h2>
            <div className="flex flex-col gap-1">
              <p className="">
                <i className="fa-solid fa-envelope mr-2"></i>
                {/* <i class="fa-regular fa-envelope mr-2"></i> */}
                <span className="inline-block text-slate-600 font-light">
                  {usuario.email}
                </span>
              </p>
              <p className="">
                <i className="fa-solid fa-phone-flip mr-2"></i>
                <span className="inline-block text-slate-600 font-light">
                  {usuario.telefono}
                </span>
              </p>
              <p className=" ">
                <i className="fa-solid fa-location-dot mr-2"></i>
                <span className="inline-block text-slate-600 font-light">
                  {usuario.direccion}
                </span>
              </p>
            </div>
          </div>

          <div className="mb-3 ml-2">
            <div className="flex flex-wrap justify-center gap-3">
              {sizes.map((size) => (
                <Button
                  color="primary"
                  variant="solid"
                  key={size}
                  onPress={() => handleOpen(size)}
                  className="bg-orange-400 text-blac"
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
                <EditarPerfil id={id} />
              </ModalContent>
            </Modal>
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Perfil;
