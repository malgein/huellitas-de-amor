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
// import EditarPerfil from "../EditarPerfil/EditarPerfil";
import axios from "axios";
import { useParams } from "react-router-dom";
import SubirImagenes from "../SubirImagenes/SubirImagenes";
import { useDispatch, useSelector } from "react-redux";
import { modCompleteUser } from "../../redux/actions";
import Swal from "sweetalert2";

const Perfil = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [usuario, setUsuario] = useState(null);
  const [userModified, setUserModified] = useState(true);
  const [abrir, setAbrir] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  //Para la imagen de portada probando
  const [imagenPortada, setImagenPortada] = useState("");

  //Para el tamaño del modal
  const [size, setSize] = React.useState("md");
  const sizes = ["2xl"];

  const [perfil, setPerfil] = useState({
    imagenPortada: "",
    imagenPerfil: "",
  });

  // const handleEliminarImagenPerfil = () => {
  //   setPerfil({ ...perfil, imagenPerfil: "" });
  // };

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  // Definir una función para actualizar el estado del usuario
  const updateUser = (newUserData) => {
    setUsuario(newUserData);
  };

  const handleCambioImagenPortada = () => {
    // Aquí puedes agregar lógica para abrir el componente SubirImagenes
    setAbrir(!abrir);
  };

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

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

  const handleEdit = async (id) => {
    console.log(id);
    const { value: formValues } = await Swal.fire({
      title: "Introduce los nuevos datos del usuario que deseas modificar",
      html:
        "Nombre del usuario " +
        '<input id="swal-input1" class="swal2-input"> </br> ' +
        "Apellido del usuario" +
        '<input id="swal-input2" class="swal2-input"> </br> ' +
        "Nacionalidad del usuario " +
        '<input id="swal-input3" class="swal2-input"> </br> ' +
        "ubicacion del usuario " +
        '<input id="swal-input4" class="swal2-input"> </br> ' +
        "Direccion del usuario " +
        '<input id="swal-input5" class="swal2-input"> </br> ' +
        "Telefono del usuario " +
        '<input id="swal-input6" class="swal2-input"> </br> ' +
        "Detalles  del usuario " +
        '<input id="swal-input7" class="swal2-input"> </br> ' +
        "Email del usuario " +
        '<input id="swal-input8" class="swal2-input"> </br> ' +
        "Password del usuario " +
        '<input type="password" id="swal-input9" class="swal2-input"> </br> ',
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
          document.getElementById("swal-input3").value,
          document.getElementById("swal-input4").value,
          document.getElementById("swal-input5").value,
          document.getElementById("swal-input6").value,
          document.getElementById("swal-input7").value,
          document.getElementById("swal-input8").value,
          document.getElementById("swal-input9").value,
        ];
      },
    });

    const result = {
      nombre: formValues[0],
      apellido: formValues[1],
      nacionalidad: formValues[2],
      ubicacion: formValues[3],
      direccion: formValues[4],
      telefono: parseInt(formValues[5]),
      acerca: formValues[6],
      email: formValues[7],
      password: formValues[8],
    };

    if (
      formValues[0] === "" ||
      formValues[1] === "" ||
      formValues[2] === "" ||
      formValues[3] === "" ||
      formValues[4] === "" ||
      formValues[5] === "" ||
      formValues[6] === "" ||
      formValues[7] === "" ||
      formValues[8] === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "No se pudo modificar el usuario",
        text: "No puedes dejar campos en blanco!",
      });
    } else if (isNaN(result.telefono)) {
      Swal.fire({
        icon: "error",
        title: "No se pudo modificar el usuario",
        text: "el telefono del usuario debe ser expresado en numeros enteros",
      });
    } else if (formValues[5].charAt(0) === "0") {
      Swal.fire({
        icon: "error",
        title: "No se pudo modificar el usuario",
        text: "el telefono del usuario no debe empezar por 0",
      });
    } else if (formValues[5].length > 9) {
      Swal.fire({
        icon: "error",
        title: "No se pudo modificar el usuario",
        text: "el telefono del usuario no debe exceder los 9 digitos",
      });
    } else {
      console.log(result.telefono.length);
      dispatch(modCompleteUser(id, result));

      // Actualizar el estado del usuario con los nuevos datos
      updateUser(result);
      Swal.fire({
        icon: "success",
        text: "Modificacion exitosa!",
      });
      setUserModified(!userModified);
    }
  };

  return (
    <div className="border-2 flex justify-center ">
      {usuario ? (
        <div className=" w-[1000px] mx-auto rounded-2xl shadow-lg   mb-unit-8">
          <div className="border-2 rounded-t-lg h-[350px] w-[1000px] relative ">
            {/* aqui va una imagen */}
            {perfil.imagenPortada && (
              <img
                src={perfil.imagenPortada}
                alt="Imagen de portada"
                onClick={handleCambioImagenPortada}
                style={{ cursor: "pointer" }}
                className="h-[350px] w-[1000px] rounded-t-lg"
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
                  {usuario.ubicacion}
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
                  className="bg-orange-400 text-black"
                  onClick={() => handleEdit(usuario.id)}
                >
                  Editar perfil
                </Button>
              ))}
            </div>

            {/* <Modal size={size} isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                <ModalHeader className="flex flex-col gap-1">
                  Actualizar Perfil
                </ModalHeader>
                <EditarPerfil />
              </ModalContent>
            </Modal> */}
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Perfil;
