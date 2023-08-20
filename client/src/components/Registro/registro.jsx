import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

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

  const validationSchema = Yup.object({
    nombre: Yup.string().required("El nombre es requerido"),
    apellido: Yup.string().required("El nombre es requerido"),
    nacionalidad: Yup.string().required("El nombre es requerido"),
    localizacion: Yup.string().required("El nombre es requerido"),
    direccion: Yup.string().required("El nombre es requerido"),
    telefono: Yup.string().required("El nombre es requerido"),
    acerca: Yup.string().required("El nombre es requerido"),
    email: Yup.string()
      .email("Correo electrónico inválido")
      .required("El correo electrónico es requerido"),
    password: Yup.string().required("El correo electrónico es requerido"),
  });

  const onSubmit = (values) => {
    values.preventDefault();
    axios
      .post("http://localhost:3001/usuario", initialValues)
      .then((res) => alert(res.data))
      .catch((err) => alert(err));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <Field type="text" id="nombre" name="nombre" />
          <ErrorMessage name="nombre" component="div" />
        </div>

        <div>
          <label htmlFor="apellido">Apellido:</label>
          <Field type="text" id="apellido" name="apellido" />
          <ErrorMessage name="apellido" component="div" />
        </div>

        <div>
          <label htmlFor="nacionalidad">Nacionalidad:</label>
          <Field type="text" id="nacionalidad" name="nacionalidad" />
          <ErrorMessage name="nacionalidad" component="div" />
        </div>

        <div>
          <label htmlFor="locacion">Locacion:</label>
          <Field type="text" id="locacion" name="locacion" />
          <ErrorMessage name="locacion" component="div" />
        </div>

        <div>
          <label htmlFor="direccion">Direccion:</label>
          <Field type="text" id="direccion" name="direccion" />
          <ErrorMessage name="direccion" component="div" />
        </div>

        <div>
          <label htmlFor="telefono">Telefono:</label>
          <Field type="text" id="telefono" name="telefono" />
          <ErrorMessage name="telefono" component="div" />
        </div>

        <div>
          <label htmlFor="acerca">Acerca:</label>
          <Field type="text" id="acerca" name="acerca" />
          <ErrorMessage name="acerca" component="div" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>

        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
};

export default Registro;
