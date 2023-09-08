import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux"; // Asegúrate de importar useDispatch de acuerdo a tu estructura Redux
import { modCompleteUser } from "../../redux/actions";
import { Button, Input, Textarea } from "@nextui-org/react";
import ImagenesPerfil from "../ImagenesPerfil/ImagenesPerfil";

const EditarPerfil = ({
  id,
  updateUser,
  setUserModified,
  perfil,
  setPerfil,
}) => {
  const dispatch = useDispatch();
  const imagenes = useSelector((state) => state.imagenes);

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    nacionalidad: "",
    ubicacion: "",
    direccion: "",
    telefono: "",
    acerca: "",
    email: "",
    password: "",
    // imagenPerfil: "",
  });

  useEffect(() => {
    // Llena el estado 'formData' con los datos actuales del perfil cuando se carga el componente
    if (perfil) {
      setFormData({
        ...perfil, //cambio uno
        nombre: perfil.nombre,
        apellido: perfil.apellido,
        nacionalidad: perfil.nacionalidad,
        ubicacion: perfil.ubicacion,
        direccion: perfil.direccion,
        telefono: perfil.telefono,
        acerca: perfil.acerca,
        email: perfil.email,
        password: "",
        imagenPerfil: perfil.imagenPerfil,
        imagenPortada: perfil.imagenPortada,
      });
    }
  }, [perfil]);
  console.log(perfil);

  const handleEdit = async () => {
    // Lógica de validación
    // if (
    //   formData.nombre === "" ||
    //   formData.apellido === "" ||
    //   formData.nacionalidad === "" ||
    //   formData.ubicacion === "" ||
    //   formData.direccion === "" ||
    //   formData.telefono === "" ||
    //   formData.acerca === "" ||
    //   formData.email === "" ||
    //   formData.password === "" ||
    //   formData.imagenPerfil === ""
    // ) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "No se pudo modificar el usuario",
    //     text: "No puedes dejar campos en blanco!",
    //   });
    // }
    if (isNaN(formData.telefono)) {
      Swal.fire({
        icon: "error",
        title: "No se pudo modificar el usuario",
        text: "El teléfono del usuario debe ser expresado en números enteros",
      });
    } else if (formData.telefono.charAt(0) === "0") {
      Swal.fire({
        icon: "error",
        title: "No se pudo modificar el usuario",
        text: "El teléfono del usuario no debe empezar por 0",
      });
    } else if (formData.telefono.length > 9) {
      Swal.fire({
        icon: "error",
        title: "No se pudo modificar el usuario",
        text: "El teléfono del usuario no debe exceder los 9 dígitos",
      });
    } else {
      dispatch(modCompleteUser(id, formData));

      updateUser(formData);
      setPerfil({ ...perfil, imagenPerfil: formData.imagenPerfil }); // Actualiza la imagen de perfil en el estado de Perfil
      Swal.fire({
        icon: "success",
        text: "Modificación exitosa!",
      });
      setUserModified(!userModified);
      dispatchRedux();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form className=" w-[600px] flex flex-col text-gray-800 font-medium">
        <div className="flex flex-row gap-5">
          <div className=" flex flex-col w-[50%] ">
            <Input
              type="email"
              label="Nombre"
              placeholder="Agrega un nombre"
              labelPlacement="outside"
              value={formData.nombre}
              onChange={(e) =>
                setFormData({ ...formData, nombre: e.target.value })
              }
            />

            <Input
              type="email"
              label="Apellidos"
              placeholder="Apellidos"
              labelPlacement="outside"
              value={formData.apellido}
              onChange={(e) =>
                setFormData({ ...formData, apellido: e.target.value })
              }
              className="mt-2"
            />

            <Input
              type="email"
              label="Nacionalidad"
              placeholder="Nacionalidad"
              labelPlacement="outside"
              value={formData.nacionalidad}
              onChange={(e) =>
                setFormData({ ...formData, nacionalidad: e.target.value })
              }
              className="mt-2"
            />
          </div>

          <div className=" flex flex-col w-[50%] ">
            <Input
              type="email"
              label="Ubicación"
              placeholder="Ubicación"
              labelPlacement="outside"
              value={formData.ubicacion}
              onChange={(e) =>
                setFormData({ ...formData, ubicacion: e.target.value })
              }
            />

            <Input
              type="email"
              label="Dirección"
              placeholder="Dirección"
              labelPlacement="outside"
              value={formData.direccion}
              onChange={(e) =>
                setFormData({ ...formData, direccion: e.target.value })
              }
              className="mt-2"
            />

            <Input
              type="email"
              label="Telefono"
              placeholder="Telefono"
              labelPlacement="outside"
              value={formData.telefono}
              onChange={(e) =>
                setFormData({ ...formData, telefono: e.target.value })
              }
              className="mt-2"
            />
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <Textarea
            type="text"
            label="Descripción"
            labelPlacement="outside"
            placeholder="Acerca de..."
            value={formData.acerca}
            onChange={(e) =>
              setFormData({ ...formData, acerca: e.target.value })
            }
            // className="w-[600px] h-[100px] mb-2 border-2 rounded"
          />
        </div>

        <div className="flex gap-5 mt-6">
          <Input
            type="email"
            label="Email"
            placeholder="Ingresa tu correo"
            labelPlacement="outside"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <Input
            type="email"
            label="Contraseña"
            placeholder="Contraseña"
            labelPlacement="outside"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>

        <label className="mt-4 text-black">Foto de perfil</label>

        <div className="border-4 rounded-full w-[180px] mx-auto mb-4">
          <ImagenesPerfil
            setImagenes={(imagenes) =>
              setFormData({
                ...formData,
                imagenPerfil: imagenes[0] || "",
              })
            }
          />
        </div>
        <div className=" flex justify-center items-center w-[200px]">
          {imagenes &&
            imagenes.map((imag) => {
              return (
                <img
                  onClick={() => handleClickImages(imag)}
                  src={imag}
                  alt=""
                  className="h-[80px] m-[15px]"
                />
              );
            })}
        </div>

        <div className="flex flex-col justify-center items-center mb-4">
          <Button
            type="button"
            onClick={handleEdit}
            className="bg-orange-400 text-black w-[150px] mt-4"
          >
            Editar Usuario
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditarPerfil;
