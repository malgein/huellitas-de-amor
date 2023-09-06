import React, { useState } from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { modCompleteUser } from "../../redux/actions";
import { modFotoPerfil } from "../../redux/actions";
import { Button } from "@nextui-org/react";
import ImagenesPerfil from "../ImagenesPerfil/ImagenesPerfil";

const FotoPerfil = ({ id }) => {
  const dispatch = useDispatch();

  const imagenes = useSelector((state) => state.imagenes);

  // const [perfil, setPerfil] = useState({
  //   imagenPerfil: "",
  // });

  const [formData, setFormData] = useState({
    imagenPerfil: "",
  });

  const handleEdit = async () => {
    // Lógica de validación
    if (formData.imagenPerfil === "") {
      Swal.fire({
        icon: "error",
        title: "No se pudo modificar el usuario",
        text: "No puedes dejar campos en blanco!",
      });
    } else {
      dispatch(modFotoPerfil(id, formData));

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

// import React, { useState } from "react";
// import Swal from "sweetalert2";
// import { useDispatch, useSelector } from "react-redux";
// import { modCompleteUser } from "../../redux/actions";
// import ImagenesPerfil from "../ImagenesPerfil/ImagenesPerfil";

// const FotoPerfil = ({
//   id,
//   updatePhoto,
//   setUsuarioModificado,
//   perfil,
//   setPerfil,
// }) => {
//   const dispatch = useDispatch();
//   const imagenes = useSelector((state) => state.imagenes);

//   const [formData, setFormData] = useState({
//     imagenPerfil: "",
//   });

//   const handleEdit = async () => {
//     // Lógica de validación
//     if (formData.imagenPerfil === "") {
//       Swal.fire({
//         icon: "error",
//         title: "No se pudo modificar la foto de perfil",
//         text: "No puedes dejar campos en blanco!",
//       });
//     } else {
//       // Llama a la acción para actualizar solo la imagen de perfil en el backend
//       dispatch(modCompleteUser(id, { imagenPerfil: formData.imagenPerfil }))
//         .then((response) => {
//           if (response.success) {
//             // Si la actualización es exitosa, actualiza el estado local con la nueva URL
//             setPerfil({ ...perfil, imagenPerfil: formData.imagenPerfil });
//             Swal.fire({
//               icon: "success",
//               text: "Modificación exitosa!",
//             });
//             setUsuarioModificado(!setUsuarioModificado);
//           } else {
//             Swal.fire({
//               icon: "error",
//               title: "Error al modificar la foto de perfil",
//               text: "Hubo un error en el servidor.",
//             });
//           }
//         })
//         .catch((error) => {
//           console.error("Error al actualizar la imagen de perfil:", error);
//           Swal.fire({
//             icon: "error",
//             title: "Error al modificar la foto de perfil",
//             text: "Hubo un error en la solicitud.",
//           });
//         });
//     }
//   };

//   return (
//     <div className="border border-black flex flex-col justify-center items-center">
//       <form>
//         <label htmlFor="">Imagen de perfil</label>
//         <div>
//           <ImagenesPerfil
//             setImagenes={(imagenes) =>
//               setFormData({
//                 ...formData,
//                 imagenPerfil: imagenes[0] || "",
//               })
//             }
//           />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
//           {imagenes &&
//             imagenes.map((imag) => {
//               return <img src={imag} alt="" className="h-[80px] m-[15px]" />;
//             })}
//         </div>

//         <button type="button" onClick={handleEdit}>
//           Guardar Cambio
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FotoPerfil;
