import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import google from "../../assets/google.png";
import { useAuth } from "../../../context/AuthContext";

export default function ModalLogSig() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("#");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
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
  );
}
