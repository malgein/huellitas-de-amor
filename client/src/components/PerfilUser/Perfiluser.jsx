import React, { useState, useEffect } from "react";
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
import EditarPerfil from "../EditarPerfil/EditarPerfil";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BotonPerfil from "../EditarPerfil/BotonPerfil";
import BotonPortada from "../EditarPerfil/BotonPortada";

const Perfil = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [usuario, setUsuario] = useState(null);
  const [userModified, setUserModified] = useState(true);
  const [abrir, setAbrir] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [numeroAdopciones, setNumeroAdopciones] = useState(0);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  //Para el tamaño del modal
  const [size, setSize] = React.useState("md");
  const sizes = ["2xl"];

  const [perfil, setPerfil] = useState({
    imagenPerfil: "",
  });

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  // Definir una función para actualizar el estado del usuario
  const updateUser = (newUserData) => {
    setUsuario(newUserData);
  };

  const abrirModal = () => {
    setIsEditModalOpen(true); // Abre el modal de edición al hacer clic en el botón "Editar perfil"
  };

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  // Define una función para actualizar el estado de perfil
  const actualizarPerfil = (nuevoPerfil) => {
    setPerfil(nuevoPerfil);
  };

  const basename = "http://localhost:3001";

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(`http://localhost:3001/perfil/${id}`); // Reemplaza con tu URL de la API
        const response = await axios.get(
          `https://huellitas-de-amor-3.up.railway.app${id}`
        );

        // const response = await axios.get(`${basename}/perfil/${id}`);

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

        // Obtiene el número de adopciones
        const adopcionResponse = await axios.get(`${basename}/adopcion/${id}`);
        const numeroAdopciones = adopcionResponse.data;
        setNumeroAdopciones(numeroAdopciones);
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="border-2 flex justify-center ">
      {usuario ? (
        <div className=" w-[1000px] mx-auto rounded-2xl shadow-lg   mb-unit-8">
          <div className="border border-b-4 rounded-t-lg h-[350px] w-[1000px] relative ">
            {/* aqui va una imagen */}
            <img
              src={perfil.imagenPortada.replace(/"/g, "")}
              alt="Imagen de perfil"
              className="h-[350px] w-[1000px]"
            />

            <div className="flex flex-col ml-3 max-w-sm mx-auto rounded-xl space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 absolute bottom-[-110px] left-0">
              <div className="border-4 border-black object-contain rounded-full w-[180px] relative">
                {/* {usuario.imagenPerfil} */}
                <img
                  src={perfil.imagenPerfil.replace(/"/g, "")}
                  alt="Imagen de perfil"
                  className="rounded-full object-cover "
                />

                <div className="border-2 border-black rounded-full w-[35px] h-[35px] absolute right-0 bottom-6 bg-white flex items-center justify-center">
                  <BotonPerfil perfil={perfil} setPerfil={setPerfil} />
                </div>
              </div>

              <div className="flex flex-col text-lg text-black font-semibold ">
                <h1 className="mb-0">
                  {usuario.nombre + " " + usuario.apellido}
                </h1>

                <p className="text-slate-500 font-light mt-0">
                  {usuario.ubicacion}
                </p>
              </div>
            </div>

            <div className="border-2 border-black rounded-full w-[35px] h-[35px] absolute right-2 bottom-0 bg-white flex items-center justify-center">
              <BotonPortada />
            </div>
          </div>

          {/* <Button
            key={size}
            onPress={() => handleOpen(size)}
            onClick={setAbrirFotoPortada}
          >
            Editar foto de portada
          </Button> */}

          {/* <Modal
            size="2xl"
            isOpen={abrirFotoPerfil}
            onOpenChange={() => setAbrirFotoPortada(false)}
          >
            <ModalContent>
              <FotoPerfil
                id={id}
                updateUser={updateUser}
                setUserModified={setUserModified}
                perfil={perfil} // Pasa el perfil como prop
                setPerfil={setPerfil}
              />
            </ModalContent>
          </Modal> */}

          <div className="mt-[120px] ml-3 flex flex-col text-start">
            <h2 className="text-lg text-black font-semibold mb-2">
              Acerca de Mí:
            </h2>
            <p>{usuario.acerca}</p>
          </div>

          <div className="flex flex-row items-center justify-center h-[100px] mt-10 gap-10">
            <div className="border-x border-slate-400  px-10">
              {" "}
              <p className="text-lg text-black font-semibold">
                {numeroAdopciones}
              </p>
              <h4 className="text-slate-500 font-light text-xl">Adoptados</h4>
            </div>
            {/* <div className="border-x border-slate-400  px-10">
              {" "}
              <p className="text-lg text-black font-semibold">3</p>
              <h4 className="text-slate-500 font-light">Favoritos</h4>
            </div> */}
            {/* <div className=" ">
              {" "}
              <p className="text-lg text-black font-semibold">2</p>
              <h4 className="text-slate-500 font-light">Donaciones</h4>
            </div> */}
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
                  className="bg-orange-400 text-black"
                  onClick={abrirModal}
                >
                  <i class="fa-solid fa-pen"></i> Editar perfil
                </Button>
              ))}
            </div>

            <Modal
              size="2xl"
              isOpen={isEditModalOpen}
              onOpenChange={() => setIsEditModalOpen(false)}
            >
              <ModalContent>
                <ModalHeader className="flex flex-col gap-1">
                  Actualizar Perfil
                </ModalHeader>

                <EditarPerfil
                  id={id}
                  updateUser={updateUser}
                  setUserModified={setUserModified}
                  perfil={perfil}
                  setPerfil={setPerfil}
                />
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
