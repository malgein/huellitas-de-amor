import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import google from "../../assets/google.png";
import { useAuth } from "../../../../server/src/context/AuthContext";



export default function ModalLogSig() {
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const  { user} = useAuth()
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(usuario.email, usuario.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };  

  const handleChange = ({ target: { value, name } }) =>
    setUsuario({ ...usuario, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      
      await loginWithGoogle();
      navigate("#");
      console.log('creare el usuario')

    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!usuario.email)
      return setError(
        "Escriba un correo electrónico para restablecer la contraseña"
      );
    try {
      await resetPassword(usuario.email);
      setError("Te enviamos un correo electrónico. Revisa tu correo");
    } catch (error) {
      setError(error.message);
    }
  };

  // useEffect(() => {
  //   console.log(user)
  // },[user])

  return (
    <div className="w-full max-w-xs m-auto">
      {/* {console.log(usuario)} */}
      {/* <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Tu_Correo@empresa.com"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="*************"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Ingresar
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#!"
            onClick={handleResetPassword}
          >
            Olvidaste tu contraseña?
          </a>
        </div>
      </form> */}
      <Button onClick={handleGoogleSignin} className="w-full">
        <img src={google} className="w-6 h-6" alt="" />
        Google login
      </Button>

      <p className="my-4 text-sm flex justify-between px-3">
        ¿No tienes Cuenta?
        <Link to="/registro" className="text-blue-700 hover:text-blue-900">
          Regístrate
        </Link>
      </p>
    </div>
  );
}
