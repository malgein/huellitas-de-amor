import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { modCompleteUser } from "../../redux/actions";
// import { modFotoPerfil } from "../../redux/actions"; Me da error y lo comento validar con Jossy??
import { Button } from "@nextui-org/react";
import ImagenesPerfil from "../ImagenesPerfil/ImagenesPerfil";
import { useNavigate } from "react-router-dom";

const FotoPerfil = ({ id, updateUser, setUserModified, perfil, setPerfil }) => {
  const dispatch = useDispatch();

  const imagenes = useSelector((state) => state.imagenes);

  // const [perfil, setPerfil] = useState({
  //   imagenPerfil: "",
  // });

  const [formData, setFormData] = useState({
    imagenPerfil: "",
  });

  useEffect(() => {
    // Llena el estado 'formData' con los datos actuales del perfil cuando se carga el componente
    if (perfil) {
      setFormData({
        nombre: perfil.nombre,
        apellido: perfil.apellido,
        nacionalidad: perfil.nacionalidad,
        ubicacion: perfil.ubicacion,
        direccion: perfil.direccion,
        telefono: perfil.telefono,
        acerca: perfil.acerca,
        email: perfil.email,
        password: "",
        imagenPortada: perfil.imagenPortada,
      });
    }
  }, [perfil]);

  const handleEdit = async () => {
    if (formData.imagenPerfil) {
      dispatch(modCompleteUser(id, formData));

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
    <div className="border border-black flex flex-col justify-center items-center ">
      <form className="mt-4">
        <div className=" flex justify-start">
          <label className="font-medium text-black">Foto de perfil</label>
        </div>

        <div className=" border-4 rounded-full w-[180px] mx-auto mb-4 mt-4">
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
              return <img src={imag} alt="" className=" " />;
            })}
        </div>

        <Button
          type="button"
          onClick={handleEdit}
          className="bg-orange-400 text-black mt-4 mb-4"
        >
          Guardar Cambio
        </Button>
      </form>
    </div>
  );
};

export default FotoPerfil;
