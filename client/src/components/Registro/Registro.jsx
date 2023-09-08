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
import NewLogin from "../NewRegis/NewLogin";
import { NuevoRegistro } from "../NewRegis/NewRegistro";

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
  // const basename = "https://huellitas-de-amor-3.up.railway.app";
  const basename = "http://localhost:3001";

  const onSubmit = (values) => {
    // e.preventDefault();

    axios
      .post(`${basename}/usuario`, values)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Registro exitoso",
          text: "Usuario registrado con éxito",
        });
        dispatchRedux();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Error de registro",
          text: "Hubo un error al registrar al usuario",
        });
      });
  };

  return (
    // <div className={styles.formcontainer}>
    <div className="flex flex-col items-center">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        // enableReinitialize={true}
      >
        {({ isSubmitting, errors, values, resetForm }) => (
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
                value={formData.password}
                onChange={handleChange}
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
      <div>
        <NewLogin />
      </div>
      <div>
        <NuevoRegistro />
      </div>
    </div>
  );
};

export default Registro;
