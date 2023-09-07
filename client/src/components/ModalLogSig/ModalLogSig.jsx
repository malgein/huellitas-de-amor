import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import google from "../../assets/google.png";
import { useAuth } from "../../../context/AuthContext";
import { LoginButton } from "../Auth0/Auth0";
import { LogoutButton } from "../Auth0Out/Auth0Out";



export default function ModalLogSig() {
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  const  { user} = useAuth()

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

  const { login, loginWithGoogle, loginWithFacebook } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleGoogleSignin = async () => {
    try {
      
      await loginWithGoogle();
      navigate("#");
      console.log('creare el usuario')

    } catch (error) {
      setError(error.message);
    }
  };


  const handleLoginFacebook = async () => {
    try {
      await loginWithFacebook();
      navigate("#");
    } catch (error) {
      setError(error.message);
    }
  };

  // useEffect(() => {
  //   console.log(user)
  // },[user])

  return (
    <div>
      <div className="w-full max-w-xs m-auto">
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
      <div className="w-full max-w-xs m-auto">
        <Button onClick={handleLoginFacebook} className="w-full">
          {/* <img src={google} className="w-6 h-6" alt="" /> */}
          Facebook login
        </Button>

        <p className="my-4 text-sm flex justify-between px-3">
          ¿No tienes Cuenta?
          <Link to="/registro" className="text-blue-700 hover:text-blue-900">
            Regístrate
          </Link>
        </p>
      </div>
      <div>
        <LoginButton />
      </div>
      <div>
        <LogoutButton />
      </div>
    </div>
  )
  }
