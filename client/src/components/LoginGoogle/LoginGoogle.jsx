import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import google from "../../assets/google.png";
import { useAuth } from "../../../context/AuthContext";

export default function LoginGoogle() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email)
      return setError(
        "Escriba un correo electrónico para restablecer la contraseña"
      );
    try {
      await resetPassword(user.email);
      setError("Te enviamos un correo electrónico. Revisa tu correo");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">
      
      <Button onClick={handleGoogleSignin} className="w-full">
        <img src={google} className="w-6 h-6" alt="" />
        Inicia sesión con Google
      </Button>
    </div>
  );
}
