import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Textarea, Button, Input } from "@nextui-org/react";
import styles from "./registro.module.css";
import FormInput from "../FormInput/FormInput";

const Registro = () => {
  // const [registroExitoso, setRegistroExitoso] = useState(false);

  const initialValues = {
    nombre: "",
    apellido: "",
    nacionalidad: "",
    localizacion: "",
    direccion: "",
    telefono: "",
    acerca: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    nombre: Yup.string().required("Por favor, introduce tu nombre."),
    apellido: Yup.string().required("Por favor, introduce tu apellido."),
    nacionalidad: Yup.string().required(
      "Por favor, introduce tu nacionalidad."
    ),
    localizacion: Yup.string().required("Por favor, proporciona tu ubicación."),
    direccion: Yup.string().required("Por favor, proporciona tu dirección."),
    telefono: Yup.string().required(
      "Por favor, ingresa tu número de teléfono."
    ),
    acerca: Yup.string().required("Por favor, cuéntanos un poco acerca de ti."),
    email: Yup.string()
      .email("Correo electrónico inválido")
      .required("Por favor, introduce tu dirección de correo electrónico."),
    password: Yup.string().required("Por favor, crea una contraseña."),
  });

  // const onSubmit = (values) => {
  //   axios
  //     .post("http://localhost:3001/usuario", values)
  //     .then((res) => {
  //       alert("Usuario registrado con éxito");
  //       // setRegistroExitoso(true);
  //     })
  //     .catch((err) => {
  //       alert("Hubo un error al registrar al usuario");
  //     });
  // };

  const onSubmit = (values) => {
    axios
      .post("http://localhost:3001/usuario", values)
      .then((res) => {
        // Manejar la respuesta del servidor, por ejemplo, mostrar un mensaje de éxito
        alert("Usuario registrado con éxito");
        resetForm();
      })
      .catch((err) => {
        // Manejar errores, por ejemplo, mostrar un mensaje de error
        alert("Hubo un error al registrar al usuario");
      });
  };

  return (
    <div className={styles.formcontainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        // enableReinitialize={true}
      >
        {({ isSubmitting, errors, values, setValues }) => (
          <Form>
            <div className={styles.tittle}>
              <h1>Registrate</h1>
            </div>
            <div>
              <FormInput label="Nombre" name="nombre" error={errors.nombre} />
            </div>

            <div>
              <FormInput
                label="Apellido"
                name="apellido"
                error={errors.apellido}
              />
            </div>

            <div>
              <FormInput
                label="Nacionalidad"
                name="nacionalidad"
                error={errors.nacionalidad}
              />
            </div>

            <div>
              <FormInput
                label="Localizacion"
                name="localizacion"
                error={errors.localizacion}
              />
            </div>

            <div>
              <FormInput
                label="Direccion"
                name="direccion"
                error={errors.direccion}
              />
            </div>

            <div>
              <FormInput
                label="Telefono"
                name="telefono"
                error={errors.telefono}
              />
            </div>

            <div>
              <FormInput label="Acerca" name="acerca" error={errors.acerca} />
            </div>

            <div>
              <FormInput label="Email" name="email" error={errors.email} />
            </div>

            <div>
              <FormInput
                label="Contraseña"
                name="password"
                error={errors.password}
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="border border-black text-black hover:bg-slate-100 mt-8 bg-inherit "
              size="lg"
            >
              Registrate
            </Button>

            {/* {registroExitoso && setValues(initialValues)} */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registro;
