import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import FormTextarea from "../FormTextarea/FormTextarea";
import { Button } from "@nextui-org/button";
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
  console.log("Aqui datos", initialValues);

  const basename = "http://localhost:3001";

  const handleSubmit = async (values) => {
    try {
      // Realiza una solicitud PUT al backend para actualizar el perfil
      const response = await axios.put(`${basename}/${userId}`, values);

      if (response.status === 200) {
        console.log("Perfil actualizado con éxito");
        // Puedes redirigir al usuario a su perfil nuevamente o mostrar un mensaje de éxito
      }
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
      // Maneja el error de alguna manera (mostrar un mensaje de error, etc.)
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        // enableReinitialize={true}
      >
        {({ isSubmitting, values }) => (
          <Form onSubmit={handleSubmit}>
            {/* <div>
              <h1>Registrate</h1>
            </div> */}
            <div>
              <FormInput
                label="Nombre"
                name="nombre"
                placeholder="Nombre"
                values="datos.nombre"
                onChange={handleChange}
              />
            </div>
            <div>
              <FormInput
                label="Apellido"
                name="apellido"
                placeholder="Apellido"
                values="datos.apellido"
                onChange={handleChange}
              />
            </div>
            <div>
              <FormInput
                label="Nacionalidad"
                name="nacionalidad"
                placeholder="Nacionalidad"
                values="datos.nacionalidad"
                onChange={handleChange}
              />
            </div>
            <div>
              <FormInput
                label="Ubicación"
                name=" ubicacion"
                placeholder="Ubicación"
                values="datos.ubicacion"
                onChange={handleChange}
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
      {/*  */}
    </div>
  );
};

export default EditarPerfil;
