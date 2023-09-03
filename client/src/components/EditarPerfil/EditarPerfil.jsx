import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { modCompleteUser } from "../../redux/actions";

const EditarPerfil = () => {
  const { userId } = useParams();
  console.log("userId:", userId);

  const [usuario, setUsuario] = useState(null);
  const [imagenPortada, setImagenPortada] = useState("");
  const [userModified, setUserModified] = useState(true);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    id: userId,
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
    // Cargar los datos del usuario desde el backend cuando el componente se monta
    axios.get(`http://localhost:3001/perfil/${userId}`).then((response) => {
      setUserData(response.data);
    });
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

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
      // dispatch(editUser(id, result))
      // console.log(userModified)
      Swal.fire({
        icon: "success",
        text: "Modificacion exitosa!",
      });
      setUserModified(!userModified);
    }
  };

  return (
    <>
      <div onClick={handleEdit}>Editar</div>
    </>

    // <div className="border border-black flex flex-col items-center h-[300px]">
    //   <form onChange={handleEdit}></form>
    //   {/* <form onSubmit={handleSubmit}>
    //     <label htmlFor="nombre">Nombre:</label>
    //     <input
    //       type="text"
    //       id="nombre"
    //       name="nombre"
    //       value={userData.nombre}
    //       onChange={handleInputChange}
    //       className="flex flex-col"
    //     />

    //     <label htmlFor="apellido">Apellido:</label>
    //     <input
    //       type="text"
    //       id="apellido"
    //       name="apellido"
    //       value={userData.apellido}
    //       onChange={handleInputChange}
    //     />

    //     <label htmlFor="email">Email:</label>
    //     <input
    //       type="email"
    //       id="email"
    //       name="email"
    //       value={userData.email}
    //       onChange={handleInputChange}
    //     />

    //     <label htmlFor="password">Contraseña:</label>
    //     <input
    //       type="password"
    //       id="password"
    //       name="password"
    //       value={userData.password}
    //       onChange={handleInputChange}
    //     />

    //     <label htmlFor="nacionalidad">Nacionalidad:</label>
    //     <input
    //       type="text"
    //       id="nacionalidad"
    //       name="nacionalidad"
    //       value={userData.nacionalidad}
    //       onChange={handleInputChange}
    //     />

    //     <label htmlFor="ubicacion">Ubicación:</label>
    //     <input
    //       type="text"
    //       id="ubicacion"
    //       name="ubicacion"
    //       value={userData.ubicacion}
    //       onChange={handleInputChange}
    //     />

    //     <label htmlFor="direccion">Dirección:</label>
    //     <input
    //       type="text"
    //       id="direccion"
    //       name="direccion"
    //       value={userData.direccion}
    //       onChange={handleInputChange}
    //     />

    //     <label htmlFor="telefono">Teléfono:</label>
    //     <input
    //       type="text"
    //       id="telefono"
    //       name="telefono"
    //       value={userData.telefono}
    //       onChange={handleInputChange}
    //     />

    //     <label htmlFor="acerca">Acerca de mí:</label>
    //     <textarea
    //       id="acerca"
    //       name="acerca"
    //       value={userData.acerca}
    //       onChange={handleInputChange}
    //     ></textarea>

    //     <button type="submit">Guardar Cambios</button>
    //   </form> */}
    // </div>
  );
};

// export default EditarPerfil;
// Exporta handleEdit como una función estática
// EditarPerfil.handleEdit = handleEdit;
