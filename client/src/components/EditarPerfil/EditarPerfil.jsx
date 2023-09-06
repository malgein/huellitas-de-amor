import React, { useState } from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux"; // Asegúrate de importar useDispatch de acuerdo a tu estructura Redux
import { modCompleteUser } from "../../redux/actions";
import { Link, Button } from "@nextui-org/react";
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

  // const [perfil, setPerfil] = useState({
  //   imagenPerfil: "",
  // });

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

  const handleEdit = async () => {
    // Lógica de validación
    if (
      (formData.nombre === "",
      formData.apellido === "",
      formData.nacionalidad === "",
      formData.ubicacion === "",
      formData.direccion === "",
      formData.telefono === "",
      formData.acerca === "",
      formData.email === "",
      formData.password === "",
      formData.imagenPerfil === "")
    ) {
      Swal.fire({
        icon: "error",
        title: "No se pudo modificar el usuario",
        text: "No puedes dejar campos en blanco!",
      });
    } else if (isNaN(formData.telefono)) {
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
      dispatch(modCompleteUser(id, formData)); // Asegúrate de definir modCompleteUser en tus acciones de Redux

      // Actualizar el estado del usuario con los nuevos datos
      // updateUser(formData);
      // Swal.fire({
      //   icon: "success",
      //   text: "Modificación exitosa!",
      // });
      // setUserModified(!userModified);

      updateUser(formData);
      setPerfil({ ...perfil, imagenPerfil: formData.imagenPerfil }); // Actualiza la imagen de perfil en el estado de Perfil
      Swal.fire({
        icon: "success",
        text: "Modificación exitosa!",
      });
      setUserModified(!userModified);
    }
  };

  return (
    <div className="border border-black flex flex-col justify-center items-center">
      <h2>Editar Usuario</h2>
      <form>
        <label>Nombre:</label>
        <input
          type="text"
          value={formData.nombre}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
        />
        <label>Apellido:</label>
        <input
          type="text"
          value={formData.apellido}
          onChange={(e) =>
            setFormData({ ...formData, apellido: e.target.value })
          }
        />
        <label>Nacionalidad:</label>
        <input
          type="text"
          value={formData.nacionalidad}
          onChange={(e) =>
            setFormData({ ...formData, nacionalidad: e.target.value })
          }
        />
        <label>Ubicación:</label>
        <input
          type="text"
          value={formData.ubicacion}
          onChange={(e) =>
            setFormData({ ...formData, ubicacion: e.target.value })
          }
        />
        <label>Dirección:</label>
        <input
          type="text"
          value={formData.direccion}
          onChange={(e) =>
            setFormData({ ...formData, direccion: e.target.value })
          }
        />
        <label>Teléfono:</label>
        <input
          type="text"
          value={formData.telefono}
          onChange={(e) =>
            setFormData({ ...formData, telefono: e.target.value })
          }
        />
        <label>Detalles:</label>
        <input
          type="text"
          value={formData.acerca}
          onChange={(e) => setFormData({ ...formData, acerca: e.target.value })}
        />
        <label>Email:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <label>Password:</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <label htmlFor="">Imagen de perfil</label>
        <div>
          <ImagenesPerfil
            setImagenes={(imagenes) =>
              setFormData({
                ...formData,
                imagenPerfil: imagenes[0] || "",
              })
            }
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
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

        <Button type="button" onClick={handleEdit}>
          Editar Usuario
        </Button>
      </form>
    </div>
  );
};

export default EditarPerfil;
