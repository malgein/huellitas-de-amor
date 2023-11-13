import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import styles from "./RegistroCasa.module.css";
import FormInput from "../FormInput/FormInput";
import { Button } from "@nextui-org/button";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
} from "@mui/material";
import Dropzone from "react-dropzone";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import validationSchema from "./Validaciones";
import validationSchemaLogin from "./ValidacionesLogin";
import * as Yup from "yup";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
// import NewLogin from "../NewRegis/NewLogin";
// import { NuevoRegistro } from "../NewRegis/NewRegistro";
import FlexBetween from "./FlexBetween";
import { useAuth } from "../../context/authContext"

const RegistroCasa = () => {
  // const { id } = useParams();
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

  const [pageType, setPageType] = useState("login");

  const Navigate = useNavigate();
  const navigate = useNavigate();

  //Si esta logeado la casa de adopcion
  const isLogin = pageType === "login";
  //Si esta registrado la casa de adopcion
  const isRegister = pageType === "register";

  console.log(pageType)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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

  const dispatchRedux = () => {
    Navigate("/");
  };
  // const basename = "https://huellitas-de-amor-3.up.railway.app";
  const basename = "http://localhost:3001";

  const register = async (values, onSubmitProps) => {
    // this allows us to send form info with image
    //Hacemos en loop para enviar las imagenes a traves de un request body al backend esta es una forma de hacer eso
    //creo que formData es  una propiedad de material ui para guardar data de los inputs
    const file = values.foto
   
    const data = new FormData()

    data.append("file", file)

    data.append("upload_preset" ,"Huellitas")

    const response = await axios.post("https://api.cloudinary.com/v1_1/dz9ytnn8w/image/upload", data)
    //Despues del loop guardaremos el archivo en nuestra carpeta local de assets a traves del nombre eso es lo que hacee esta linea de codigo
    //Y aqui formData tendra el valor de las pictures de los archivos
   

    // Endpoint  del backend que se encarga del registro de usuarios
    // const savedUserResponse = await fetch(
    //   "http://localhost:3001/crearCasaDeAdopcion",
    //   {
    //     method: "POST",
    //     //Aqui le pasamos el valor de los inputs icluyendo los archivos para registrar el usuario en el backend y en la bd
    //     body: values,
    //   }
    // );
    // //Aqui convertimos la constante 
    // const savedUser = await savedUserResponse.json();
    // Swal.fire(
    //   'Registro de usuario exitoso!',
    //   '',
    //   'success'
    // )
    

    // if (savedUser) {
    //   setPageType("login");
    // }

    // signupHouse(values)
    onSubmitProps.resetForm();
  };


  //funcion que hace posible el loggin del usuario mediante una llamada al endpoint
  const login = async (values, onSubmitProps) => {
    // const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(values),
    // });
    // const loggedIn = await loggedInResponse.json();
    // onSubmitProps.resetForm();
    // console.log(loggedIn)
    // if(loggedIn.msg === 'Invalid credentials. '){
    //   Swal.fire(
    //     'Invalid password',
    //     '',
    //     'error'
    //   )
    // } else if(loggedIn.msg === 'User does not exist. '){
    //   Swal.fire(
    //     'This email is not registered',
    //     '',
    //     'error'
    //   )
    // } else if (loggedIn) {
    //   Swal.fire(
    //     'Login successfully',
    //     '',
    //     'success'
    //   )
    //   navigate("/home");
    // }
    // console.log('click')
    signinHouse(values)
    onSubmitProps.resetForm();
  };

  const onSubmit = async(values, onSubmitProps) => {
    // e.preventDefault();
    console.log(values)

    if (isLogin) return await login(values, onSubmitProps);
    if (isRegister) return await register(values, onSubmitProps);


    // axios
    //   .post(`${basename}/usuario`, values)
    //   .then((res) => {
    //     Swal.fire({
    //       icon: "success",
    //       title: "Registro exitoso",
    //       text: "Usuario registrado con éxito",
    //     });
    //     dispatchRedux();
    //   })
    //   .catch((err) => {
    //     Swal.fire({
    //       icon: "error",
    //       title: "Error de registro",
    //       text: "Hubo un error al registrar al usuario",
    //     });
    //   });
  };

  useEffect(() => {
    if(autenticado){
      navigate('/')
    }
  }, [autenticado])

  return (
    // <div className={styles.formcontainer}>
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
        isSubmitting,
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
                            <FlexBetween
                            // display= "flex"
                            // justifyContent= "space-between"
                            // alignItems= "center"
                            >
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
            {/* {registroExitoso && setValues(initialValues)} */}
          </Form>
        )}
      </Formik>
      {/*  */}
    </div>
  );
};

export default RegistroCasa;
