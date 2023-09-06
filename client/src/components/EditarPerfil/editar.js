import Swal from "sweetalert2";
import { useDispatch } from "react-redux";

export const handleEdit = async (id) => {
  const dispatch = useDispatch();

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

// export default handleEdit;
