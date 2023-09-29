import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {useAuth} from '../../context/authContext'

export const LogoutButton = () => {

  const {logout} = useAuth()

  // const { logout } = useAuth0();
  return (
    // <button onClick={() => logout({ returnTo: window.location.origin })}>
    //   Cerrar sesión
    // </button>
  <button onClick={() => logout()}>
    Cerrar sesión
  </button>
  );
};
