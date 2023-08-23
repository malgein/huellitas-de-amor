import React from "react";
import axios from "axios";

import styles from "./registro.module.css";
import FormInput from "../FormInput/FormInput";
import { Button } from "@nextui-org/button";
import { useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "./Validaciones";
import * as Yup from "yup";

const Registro = () => {
  const [registroExitoso, setRegistroExitoso] = useState(false);

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
        setRegistroExitoso(true);

        // resetForm();
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
