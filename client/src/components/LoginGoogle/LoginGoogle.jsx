import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import google from "../../assets/google.png";

// import { useAuth } from "../../../context/AuthContext";

export default function LoginGoogle() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  // const { login, loginWithGoogle, resetPassword } = useAuth();
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

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
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
