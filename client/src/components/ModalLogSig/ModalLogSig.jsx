import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import google from "../../assets/google.png";
import { LogoutButton } from "../Auth0Out/Auth0Out";
import LoginButton from "../Auth0/Auth0";
import {useAuth} from '../../context/authContext'
import { useAuth0 } from "@auth0/auth0-react";

export default function ModalLogSig() {
  // const [user, setUser] = useState({
  //   email: "",
  //   password: "",
  // });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {usuario} = useAuth()

  const {user, isAuthenticated, logout} = useAuth0()

  return (
    <div>
      <div className="w-full max-w-xs m-auto">
        {(!user && !usuario) ?(
            <div>
            <Button className="w-full">
              <img src={google} className="w-6 h-6" alt="" />
              <LoginButton />
            </Button>
            <p className="my-4 text-sm flex justify-between px-3">
              ¿No tienes Cuenta?
              <Link to="/registro" className="text-blue-700 hover:text-blue-900">
                Regístrate
              </Link>
            </p>
          </div>
        ): null }
      </div>
      {usuario && (
        <div>
          <LogoutButton />
        </div>
      )}
      {
        isAuthenticated && (
          <div>
            <Button onClick={() => logout({ returnTo: window.location.origin })} color='danger'>
              Cerrar sesión
            </Button>
          </div>
        )
      }
    </div>
  );
}
