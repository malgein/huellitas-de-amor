import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./RegistroCasa.module.css";
import FormInput from "../FormInput/FormInput";
import { Button } from "@nextui-org/button";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography
} from "@mui/material";
import Dropzone from "react-dropzone";
import { Formik, Form} from "formik";
import validationSchema from "./Validaciones";
import validationSchemaLogin from "./ValidacionesLogin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import FlexBetween from "./FlexBetween";
import { useAuth } from "../../context/authContext"

const RegistroCasa = () => {

  //valores de los inputs
  const [formData, setFormData] = useState({
    nombreDeOng: "",
    nombreDeContacto: "",
    email: "",
    password: "",
    telefono: "",
    ubicacion: "",
    foto: ""
  });

  const {signupHouse, autenticado, signinHouse} = useAuth()

  //Establce el tipo de formulario si sera de login o de register
  const [pageType, setPageType] = useState("login");

  const navigate = useNavigate();

  //Si esta logeado la casa de adopcion
  const isLogin = pageType === "login";
  //Si esta registrado la casa de adopcion
  const isRegister = pageType === "register";

  //valores iniciales del formulario de registro

  const initialValuesRegister = {
    nombreDeOng: "",
    nombreDeContacto: "",
    email: "",
    password: "",
    telefono: "",
    ubicacion: "",
    foto: ""
  };

  //Valores iniciales en el formulario de login
  const initialValuesLogin = {
    email: "",
    password: "",
  };

  // const basename = "https://huellitas-de-amor-3.up.railway.app";
  // const basename = "http://localhost:3001";

  const register = async (values, onSubmitProps) => {
    // this allows us to send form info with image
    //Hacemos en loop para enviar las imagenes a traves de un request body al backend esta es una forma de hacer eso
    //creo que formData es  una propiedad de material ui para guardar data de los inputs
    //preguntamos si entre los valores el usuario selecciono una foto
    if(values.foto){
      const file = values.foto
     
      const data = new FormData()
  
      data.append("file", file)
  
      data.append("upload_preset" ,"Huellitas")
      //Si el usuario selcciono una foto hacemo mediante un metodo post la creacion del archivo en cloudinary
      const response = await axios.post("https://api.cloudinary.com/v1_1/dz9ytnn8w/image/upload", data)
      
      const result = {
        nombreDeOng: values.nombreDeOng,
        nombreDeContacto: values.nombreDeContacto,
        email: values.email,
        password: values.password,
        telefono: values.telefono,
        ubicacion: values.ubicacion,
        foto: response.data.secure_url
      }
      //Y luego le pasamos la foto seleccionada con los datos de los inputs
      signupHouse(result)
      onSubmitProps.resetForm();
    }
    //Si no existe una foto que el usuario selecciono simplemente le pasamos el valor de los inputs a la funcion de registro de auth sin la foto que ya esta configurada para tener un valor predeterminado en la BD
    const result = {
      nombreDeOng: values.nombreDeOng,
      nombreDeContacto: values.nombreDeContacto,
      email: values.email,
      password: values.password,
      telefono: values.telefono,
      ubicacion: values.ubicacion,
    }
    signupHouse(result)
    onSubmitProps.resetForm();
  };


  //funcion que hace posible el loggin del usuario mediante una llamada al endpoint
  const login = async (values, onSubmitProps) => {
    signinHouse(values)
    onSubmitProps.resetForm();
  };

  //Esta es la funcion de onSubmit
  const onSubmit = async(values, onSubmitProps) => {
    // console.log(values)
    //Si estamos haciendo login se ejecuta la funcion de login de auth
    if (isLogin) return await login(values, onSubmitProps);
    //Si no se ejecuta la funcion de register de auth
    if (isRegister) return await register(values, onSubmitProps);
  };

  //El useeffect hace que si estamos autenticados automaticamente pasemos a la landing
  useEffect(() => {
    if(autenticado){
      navigate('/')
    }
  }, [autenticado])

  return (
    <div className="flex flex-col items-center">
      <Formik
        initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
        validationSchema={isLogin ? validationSchemaLogin : validationSchema}
        onSubmit={onSubmit}
        // enableReinitialize={true}
      >
        {({  values,
        errors,
        touched,
        handleBlur,
        handleChange,
        // isSubmitting,
        // establece el valor del campo lo usaremos para setear el valor de picture al archivo que subamos
        setFieldValue,
        resetForm, }) => (
          <Form>
            {isRegister && (
              <>
                {/* {console.log(pageType)} */}
                <div className={styles.tittle}>
                  <h1>Registrate como Casa de Adopcion</h1>
                </div>
                <div>
                  <FormInput
                    label="Nombre de organizacion"
                    name="nombreDeOng"
                    type="text"
                    error={errors.nombreDeOng}
                    placeholder="Nombre de organizacion"
                    value={formData.nombreDeOng}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <FormInput
                    label="Nombre de contacto"
                    name="nombreDeContacto"
                    type="text"
                    error={errors.nombreDeContacto}
                    placeholder="Nombre de contacto"
                    value={formData.nombreDeContacto}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <FormInput
                    placeholder="Email"
                    label="Email"
                    name="email"
                    type="text"
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
                    type="password"
                    error={errors.password}
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <FormInput
                    label="Telefono"
                    name="telefono"
                    type="text"
                    error={errors.telefono}
                    placeholder="Telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <FormInput
                    label="Ubicacion"
                    name="ubicacion"
                    type="text"
                    error={errors.ubicacion}
                    placeholder="Ubicacion"
                    value={formData.ubicacion}
                    onChange={handleChange}
                  />
                </div>
                <Dropzone
                  // se colocan los formtatos que admite los archivois adjuntos
                  acceptedFiles=".jpg,.jpeg,.png"
                  multiple={false}
                  // Hace que setFieldValue establezca el valor de picture del initial value al valor del archivo adjunto que agreguemos
                  onDrop={(acceptedFiles) =>
                  setFieldValue("foto", acceptedFiles[0])
                  }
                >
                  {/* Dentro de esta sintaxis rara eesta el estilizado de la casilla para adjuntar archivos, notese que hay un hover y un placeholder de arroja tus archivos aqui */}
                  {({ getRootProps, getInputProps }) => (
                  <Box
                          {...getRootProps()}
                          border='2px dashed'
                          width='420px'
                          p="1rem"
                          sx={{ "&:hover": { cursor: "pointer" } }}
                        >
                          <input {...getInputProps()} />
                          {/* Aqui va el placeholder del recuadro para adjuntar archivos */}
                          {!values.foto ? (
                            <p>Agrega la imagen de la casa de adopcion aqui</p>
                          ) : (
                            <FlexBetween>
                              {/* Aqui se ve el nombre del archivo cuando lo adjuntamos */}
                              <Typography>{values.foto.name}</Typography>
                              <EditOutlinedIcon />
                            </FlexBetween>
                          )}
                        </Box>
                      )}
                    </Dropzone>
                </>
            )}
            {isLogin && (
              <>
                <div className={styles.tittle}>
                  <h1>Ingresa como Casa de Adopcion</h1>
                </div>
                <div>
                    <FormInput
                      placeholder="Email"
                      label="Email"
                      name="email"
                      type="text"
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
                    type="password"
                    error={errors.password}
                    value={formData.password}
                    onChange={handleChange}
                  />
                  </div>
              </>
            )}
          
            <Button
              type="submit"
              // disabled={isSubmitting}
              className="border border-black text-black hover:bg-slate-100 mt-8 bg-inherit "
              size="lg"
            >
               {isLogin ? "Login" : "Registrate"}
            </Button>
            <Typography
              onClick={() => {
                setPageType(isLogin ? "register" : "login");
                resetForm();
              }}
              sx={{
                textDecoration: "underline",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              {/* Al igual que renderizar el nombre de los botones que envia el formulario tenemos tambien el renderizado condicional de las opciones de logearse si tienes una cuenta o registrarse si no tienes una */}
              {isLogin
                ? "Don't have an account? Sign Up here."
                : "Already have an account? Login here."}
            </Typography>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistroCasa;
