import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import validationSchema from "./validaciones";
import Swal from "sweetalert2";
import axios from '../../api/axios'
import { useAuth } from "../../context/authContext"
// import { useAuth } from "../../../context/AuthContext";
export function NuevoRegistro() {
  // const { signup } = useAuth();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
    nombre: "",
    apellido: "",
    nacionalidad: "",
    ubicacion: "",
    direccion: "",
    telefono: "",
    acerca: ""
  };

  const {signup, isAuthenticated} = useAuth()

  // console.log(user)

  //para validacion de registro o no
  const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(false);

  const dispatchRedux = () => {
    navigate("/login");
  };


  // Función para mostrar la alerta de registrado
  const showAlert = () => {
    Swal.fire({
      icon: "info",
      title: "Usuario registrado",
      text: "El correo electrónico ya está registrado. Puedes iniciar sesión.",
      showCancelButton: false,
      showConfirmButton: true,
      confirmButtonText: "OK",
    }).then(() => {
      dispatchRedux();
    });
  };

  const onSubmit = async (values, { setSubmitting, setFieldError }) => {
    const result = {
      nombre: values.nombre,
      apellido: values.apellido,
      email: values.email,
      password: values.password,
      nacionalidad: values.nacionalidad,
      ubicacion: values.ubicacion,
      direccion: values.direccion,
      acerca: values.acerca,
      telefono: Number(values.telefono)
    }

    // console.log(result)
    // dispatch(postCrearUsuario(result))
    // console.log(newUser)
    // const res = await registerRequest(result)
    // console.log(res)
    signup(result)
    // try {
    //   // await signup(values.email, values.password);
    //   // Registro exitoso
    //   Swal.fire({
    //     icon: "success",
    //     title: "Registro exitoso",
    //     text: "Usuario registrado con éxito",
    //   });
    //   dispatchRedux();
    // } catch (error) {
    //   if (error.code === "auth/email-already-in-use") {
    //     setIsAlreadyRegistered(true);
    //     showAlert(); // Muestra la alerta
    //   } else {
    //     setFieldError("email", "Error de registro: " + error.message);
    //   }
    // } finally {
    //   setSubmitting(false);
    // }
  };

  useEffect(() => {
    if(isAuthenticated){
      navigate('/')
    }
  }, [isAuthenticated])


  return (
    <div className="w-full max-w-xs m-auto h-auto text-black">
      {/* {checkRegistrationStatus()} */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="border rounded-2xl bg-white shadow-xl px-8 pt-6 pb-6 mb-40  mt-[150px] w-[400px] h-[900px] ">
            <div className="mb-[20px]">
              <h1 className="text-3xl font-bold my-5">Registrate</h1>
            </div>

            <div className="flex flex-col justify-center items-center gap-5 h-[300px]">
              <div className="mb-4  justify-center items-center">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Correo Electrónico
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="huellitas@deamor.com"
                  className="shadow appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] h-[40px]"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Contraseña
                </label>
                <Field
                  type="password"
                  name="password"
                  placeholder="*************"
                  className="shadow appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] h-[40px]"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Nombre
                </label>
                <Field
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  className="shadow appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] h-[40px]"
                />
                <ErrorMessage
                  name="nombre"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>
              <div>
                <label
                  htmlFor="apellido"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Apellido
                </label>
                <Field
                  type="text"
                  name="apellido"
                  placeholder="Apellido"
                  className="shadow appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] h-[40px]"
                />
                <ErrorMessage
                  name="apellido"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>
              <div>
                <label
                  htmlFor="nacionalidad"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Nacionalidad
                </label>
                <Field
                  type="text"
                  name="nacionalidad"
                  placeholder="Nacionalidad"
                  className="shadow appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] h-[40px]"
                />
                <ErrorMessage
                  name="nacionalidad"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>
              <div>
                <label
                  htmlFor="ubicacion"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Ubicacion
                </label>
                <Field
                  type="text"
                  name="ubicacion"
                  placeholder="Ubicacion"
                  className="shadow appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] h-[40px]"
                />
                <ErrorMessage
                  name="ubicacion"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>
              <div>
                <label
                  htmlFor="direccion"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Direccion
                </label>
                <Field
                  type="text"
                  name="direccion"
                  placeholder="Direccion"
                  className="shadow appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] h-[40px]"
                />
                <ErrorMessage
                  name="direccion"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>
              <div>
                <label
                  htmlFor="telefono"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Telefono
                </label>
                <Field
                  type="text"
                  name="telefono"
                  placeholder="Telefono"
                  className="shadow appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] h-[40px]"
                />
                <ErrorMessage
                  name="telefono"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>
              <div>
                <label
                  htmlFor="acerca"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Acerca
                </label>
                <Field
                  type="text"
                  name="acerca"
                  placeholder="Acerca"
                  className="shadow appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[300px] h-[40px]"
                />
                <ErrorMessage
                  name="acerca"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                disabled={isSubmitting}
              >
                Registrarse
              </button>
            </div>

            <p className="my-4 text-sm flex justify-between px-3">
              ¿Ya tienes una cuenta?
              <Link to="/login" className="text-blue-700 hover:text-blue-900">
                Login
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
}
