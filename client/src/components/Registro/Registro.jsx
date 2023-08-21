import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import styles from "./Registro.module.css";
import validationSchema from "./Validaciones"; 


const Registro = () => {
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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={styles.formContainer}>

        <div className={styles.fieldContainer}>
          <label htmlFor="nombre">Nombre:</label>
          <Field type="text" id="nombre" name="nombre" />
          <ErrorMessage className={styles.error} name="nombre" component="div" />
        </div>

        <div className={styles.fieldContainer}>
          <label htmlFor="apellido">Apellido:</label>
          <Field type="text" id="apellido" name="apellido" />
          <ErrorMessage className={styles.error} name="apellido" component="div" />
        </div>

        <div className={styles.fieldContainer}>
          <label htmlFor="nacionalidad">Nacionalidad:</label>
          <Field type="text" id="nacionalidad" name="nacionalidad" />
          <ErrorMessage className={styles.error} name="nacionalidad" component="div" />
        </div>

        <div className={styles.fieldContainer}>
          <label htmlFor="localizacion">Localizacion:</label>
          <Field type="text" id="localizacion" name="localizacion" />
          <ErrorMessage className={styles.error} name="localizacion" component="div" />
        </div>

        <div className={styles.fieldContainer}>
          <label htmlFor="direccion">Direccion:</label>
          <Field type="text" id="direccion" name="direccion" />
          <ErrorMessage className={styles.error} name="direccion" component="div" />
        </div>

        <div className={styles.fieldContainer}>
          <label htmlFor="telefono">Telefono:</label>
          <Field type="text" id="telefono" name="telefono" />
          <ErrorMessage className={styles.error} name="telefono" component="div" />
        </div>

        <div className={styles.fieldContainer}>
          <label htmlFor="acerca">Acerca:</label>
          <Field type="text" id="acerca" name="acerca" />
          <ErrorMessage className={styles.error} name="acerca" component="div" />
        </div>

        <div className={styles.fieldContainer}>
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage className={styles.error} name="email" component="div" />
        </div>

        <div className={styles.fieldContainer}>
          <label htmlFor="password">Password:</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage className={styles.error} name="password" component="div" />
        </div>

        <div>
          <button type="submit" className={styles.submitButton}>
            Enviar
          </button>
        </div>

      </Form>
    </Formik>
  );
};

export default Registro;
