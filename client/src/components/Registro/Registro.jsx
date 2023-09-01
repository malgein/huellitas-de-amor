import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import styles from "./Registro.module.css";
import FormInput from "../FormInput/FormInput";
import { Button } from "@nextui-org/button";
import { useNavigate, useParams } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import validationSchema from "./Validaciones";
import * as Yup from "yup";

const Registro = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });

  const Navigate = useNavigate();
  // const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const initialValues = {
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  };

  const dispatchRedux = () => {
    Navigate("/");
    
  };
  // const basename = "https://huellitas-de-amor-production.up.railway.app";

  const basename = "http://localhost:3001";

  // const onSubmit = (values) => {
  //   axios
  //     .post(`${basename}/usuario`, values)
  //     .then((res) => {
  //       Swal.fire({
  //         icon: "success",
  //         title: "Registro exitoso",
  //         text: "Usuario registrado con éxito",
  //       });

  //       setRegistroExitoso(true);
  //     })
  //     .catch((err) => {
  //       Swal.fire({
  //         icon: "error",
  //         title: "Error de registro",
  //         text: "Hubo un error al registrar al usuario",
  //       });
  //     });
  // };

  const onSubmit = (values) => {
    // e.preventDefault();

    axios
      .post("http://localhost:3001/usuario", values)
      // .post(`${basename}/usuario`, values)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Registro exitoso",
          text: "Usuario registrado con éxito",
        });
        dispatchRedux();
      })
      .catch((err) => {
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
        {({ isSubmitting, errors }) => (
          <Form>
            <div className={styles.tittle}>
              <h1>Registrate</h1>
            </div>
            <div>
              <FormInput
                label="Nombre"
                name="nombre"
                error={errors.nombre}
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>
            <div>
              <FormInput
                label="Apellido"
                name="apellido"
                error={errors.apellido}
                placeholder="Apellido"
                value={formData.apellido}
                onChange={handleChange}
              />
            </div>
            <div>
              <FormInput
                placeholder="Email"
                label="Email"
                name="email"
                error={errors.email}
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <FormInput
                placeholder="Contraseña"
                label="Contraseña"
                name="password"
                error={errors.password}
              />
            </div>
            <div>
              <FormInput
                label="Nacionalidad"
                name="nacionalidad"
                error={errors.nacionalidad}
                placeholder="Nacionalidad"
              />
            </div>
            <div>
              <FormInput
                label="Ubicación"
                name="ubicacion"
                error={errors.ubicacion}
                placeholder="Ubicación"
              />
            </div>
            <div>
              <FormInput
                label="Direccion"
                name="direccion"
                error={errors.direccion}
                placeholder="Direccion"
              />
            </div>
            <div>
              <FormInput
                label="Telefono"
                name="telefono"
                error={errors.telefono}
                placeholder="Telefono"
              />
            </div>
            <div>
              <FormInput
                placeholder="Acerca"
                label="Acerca de ti"
                name="acerca"
                error={errors.acerca}
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
      {/*  */}
    </div>
  );
};

export default Registro;
