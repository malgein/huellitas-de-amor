//

import React, { useState, useEffect } from "react";
import FormInput from "../FormInput/FormInput";
import FormTextarea from "../FormTextarea/FormTextarea";
import { Button } from "@nextui-org/button";
<<<<<<< HEAD
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const EditarPerfil = ({ initialValor, onSubmit }) => {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [datos, setDatos] = useState({
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

  console.log("Aqui datos", datos);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Enviar los datos actualizados al servidor o almacenarlos localmente.
  //   console.log("Datos actualizados:", datos);
  //   // Cierra el formulario de edición después de guardar.
  //   //Estado para controlar si se muestra o no.
  // };
=======
import { Formik, Form } from "formik";
import Swal from "sweetalert2";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditarPerfil = () => {
  const { userId } = useParams(); // Asegúrate de tener el userId desde React Router
>>>>>>> qa

  const initialValues = {
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    nacionalidad: "",
    ubicacion: "",
    direccion: "",
    telefono: "",
    acerca: "",
  };

  // const [userData, setUserData] = useState(initialValues);

  // useEffect(() => {
  //   // Obtener los datos del usuario del backend y establecerlos en el estado
  //   if (userId) {
  //     axios
  //       .get(`http://localhost:3001/perfil/${userId}`)
  //       .then((response) => {
  //         setUserData(response.data || initialValues); // Usar initialValues si no hay datos disponibles
  //       })
  //       .catch((error) => {
  //         console.error("Error al obtener los datos del usuario:", error);
  //       });
  //   }
  // }, []);

  // console.log("aqui user data", userData);

  // const onSubmit = (values) => {
  //   // Clonar los datos para evitar referencias circulares
  //   const clonedData = JSON.parse(JSON.stringify(values));

  //   axios
  //     .put(`http://localhost:3001/usuario/${userId}`, clonedData)
  //     .then((response) => {
  //       Swal.fire(
  //         "Éxito",
  //         "Los cambios se guardaron correctamente.",
  //         "success"
  //       );
  //     })
  //     .catch((error) => {
  //       console.error("Error al actualizar los datos del usuario:", error);
  //       Swal.fire("Error", "No se pudieron guardar los cambios.", "error");
  //       console.log(error);
  //     });
  // };

  const onSubmit = async (values) => {
    // Clonar los datos para evitar referencias circulares
    // const clonedData = JSON.parse(JSON.stringify(values));
    try {
      await axios
        .put(`http://localhost:3001/usuario/${userId}`, values)
        .then((response) => {
          Swal.fire(
            "Éxito",
            "Los cambios se guardaron correctamente.",
            "success"
          );
        });
    } catch (error) {
      console.error("Error al actualizar los datos del usuario:", error);
      Swal.fire("Error", "No se pudieron guardar los cambios.", "error");
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* <form action="">
        <label htmlFor=""></label>
        <input type="text" />
      </form> */}
      <Formik
        initialValues={initialValues} // Rellenar el formulario con los datos del usuario
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form onSubmit={onSubmit}>
            <div>
              <FormInput label="Nombre" name="nombre" placeholder="Nombre" />
            </div>
            <div>
              <FormInput
                label="Apellido"
                name="apellido"
                placeholder="Apellido"
              />
            </div>
            <div>
              <FormInput
                label="Nacionalidad"
                name="nacionalidad"
                placeholder="Nacionalidad"
              />
            </div>
            <div>
              <FormInput
                label="Ubicación"
                name="ubicacion"
                placeholder="Ubicación"
<<<<<<< HEAD
                values="datos.ubicacion"
                onChange={handleChange}
=======
>>>>>>> qa
              />
            </div>
            <div>
              <FormInput
                label="Direccion"
                name="direccion"
                placeholder="Direccion"
                values="datos.direccion"
                onChange={handleChange}
              />
            </div>
            <div>
              <FormInput
                label="Telefono"
                name="telefono"
                placeholder="Telefono"
                values="datos.telefono"
                onChange={handleChange}
              />
            </div>
            <div>
              <FormTextarea
                placeholder="Realiza una descripción..."
                label="Acerca De:"
                name="acerca"
                values="datos.acerca"
                onChange={handleChange}
              />
            </div>
            <div>
              <FormInput
                placeholder="Email"
                label="Email"
                name="email"
                values="datos.email"
                onChange={handleChange}
              />
            </div>
            <div>
              <FormInput
                placeholder="Contraseña"
                label="Contraseña"
                name="password"
                values="datos.password"
                onChange={handleChange}
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="border border-black text-black hover:bg-slate-100 mt-8 bg-inherit mb-4"
              size="lg"
            >
              Guardar Cambios
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditarPerfil;
