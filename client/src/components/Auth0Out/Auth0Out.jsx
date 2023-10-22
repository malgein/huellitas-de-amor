import React from "react";
import {useAuth} from '../../context/authContext'
import { Link } from "react-router-dom";

export const LogoutButton = () => {

  const {deslogear, autenticado} = useAuth()

  return (
    autenticado && (
      <Link to='/'>
        <button onClick={() => deslogear()}>
         Cerrar sesión
        </button>
      </Link>
    )
  );
};
