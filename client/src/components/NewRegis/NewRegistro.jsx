// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../../../server/src/context/AuthContext";

// export function NuevoRegistro() {
//   const { signup } = useAuth();

//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await signup(user.email, user.password);
//       navigate("/login");
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="w-full max-w-xs m-auto text-black">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4"
//       >
//         <div className="mb-4">
//           <label
//             htmlFor="email"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             Correo Electrónico
//           </label>
//           <input
//             type="email"
//             onChange={(e) => setUser({ ...user, email: e.target.value })}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="huellitas@deamor.com"
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="password"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             Contraseña
//           </label>
//           <input
//             type="password"
//             onChange={(e) => setUser({ ...user, password: e.target.value })}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="*************"
//           />
//         </div>

//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//           Register
//         </button>
//       </form>
//       <p className="my-4 text-sm flex justify-between px-3">
//         ¿Ya tienes una cuenta?
//         <Link to="/login" className="text-blue-700 hover:text-blue-900">
//           Login
//         </Link>
//       </p>
//     </div>
//   );
// }

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../server/src/context/AuthContext";
import validationSchema from "./validaciones";
import Swal from "sweetalert2";

// ... Resto de tus importaciones ...

export function NuevoRegistro() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  // const validationSchema = Yup.object({
  //   email: Yup.string()
  //     .email("Correo electrónico no válido")
  //     .required("El correo electrónico es obligatorio"),
  //   password: Yup.string()
  //     .min(6, "La contraseña debe tener al menos 6 caracteres")
  //     .required("La contraseña es obligatoria"),
  // });

  const dispatchRedux = () => {
    navigate("/login");
  };

  const checkRegistrationStatus = () => {
    if (registrationSuccess) {
      // El usuario ya está registrado
      Swal.fire({
        icon: "info",
        title: "Usuario registrado",
        text: "¡Ya estás registrado! Puedes iniciar sesión.",
      });
    }
  };

  // const onSubmit = async (values, { setSubmitting, setFieldError }) => {
  //   try {
  //     await signup(values.email, values.password);
  //     Swal.fire({
  //       icon: "success",
  //       title: "Registro exitoso",
  //       text: "Usuario registrado con éxito",
  //     });
  //     dispatchRedux();
  //   } catch (error) {
  //     setFieldError("email", "Error de registro: " + error.message);
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  const onSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      await signup(values.email, values.password);
      // Marcar el registro como exitoso
      Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "Usuario registrado con éxito",
      });
      setRegistrationSuccess(true);
      dispatchRedux();
    } catch (error) {
      setFieldError("email", "Error de registro: " + error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto text-black">
      {/* {checkRegistrationStatus()} */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="border rounded-2xl bg-white shadow-xl px-8 pt-6 pb-6 mb-40  mt-[150px] w-[400px] h-[450px] ">
            <div className="mb-[20px]">
              <h1 className="text-3xl font-bold ">Registrate</h1>
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

      {registrationSuccess && checkRegistrationStatus()}
    </div>
  );
}
