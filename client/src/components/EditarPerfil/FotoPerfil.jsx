import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { modCompleteUser } from "../../redux/actions";
import { modFotoPerfil } from "../../redux/actions";
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
    <div className="border border-black flex flex-col justify-center items-center">
      <form>
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
              return <img src={imag} alt="" className="h-[80px] m-[15px]" />;
            })}
        </div>

        <Button type="button" onClick={handleEdit}>
          Guardar Cambio
        </Button>
      </form>
    </div>
  );
};

export default FotoPerfil;
