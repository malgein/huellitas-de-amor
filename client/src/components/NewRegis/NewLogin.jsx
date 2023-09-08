import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import LoginGoogle from "../LoginGoogle/LoginGoogle";
// import { useAuth } from "../../../context/AuthContext";

function NewLogin() {
  // const { login } = useAuth();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(null);

  const initialValues = {
    email: "",
    password: "",
  };

  const dispatchRedux = () => {
    navigate("/");
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Correo electrónico no válido")
      .required("El correo electrónico es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      await login(values.email, values.password);
      dispatchRedux(); // Redirige al usuario a la página principal después de iniciar sesión
    } catch (error) {
      setLoginError(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto text-black">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="border rounded-2xl bg-white shadow-xl px-8 pt-6 pb-6 mb-40  mt-[150px] w-[400px] h-[450px]">
            <div className="mb-[20px]">
              <h1 className="text-3xl font-bold ">Iniciar Sesión</h1>
            </div>

            <div className="flex flex-col justify-center items-center gap-5 h-[300px]">
              <div className="mb-4 justify-center items-center">
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
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={isSubmitting}
              >
                Iniciar Sesión
              </button>

              <div>
                <LoginGoogle />
              </div>
            </div>

            <p className="my-8 text-sm flex justify-between px-3">
              ¿No tienes una cuenta?
              <Link
                to="/registro"
                className="text-blue-700 hover:text-blue-900"
              >
                Registrarse
              </Link>
            </p>
          </Form>
        )}
      </Formik>

      {loginError && (
        <div className="text-red-500 text-center mb-4">{loginError}</div>
      )}
    </div>
  );
}

export default NewLogin;
