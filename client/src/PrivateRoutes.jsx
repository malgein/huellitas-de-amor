import React, { useState, useContext, useEffect} from "react";
import { Route, Navigate } from "react-router-dom";
import { authContext } from "../context/AuthContext"; // Importa el contexto de autenticación de Firebase

const PrivateRoutes = ({ element }) => {
	const { user, actualUser } = useContext(authContext); // Obtiene el usuario actual del contexto de autenticación
	const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if(actualUser.tipoDeUsuario.tipo !== "Administrador" || actualUser.tipoDeUsuario.tipo !== "Super Administrador"){
        setLoading(false); // El usuario ya se ha cargado
      } 
    }, 5000);
      setLoading(false);
      return () => clearTimeout(timeout); // Limpia el temporizador si el componente se desmonta antes de que expire
  }, [actualUser]);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  //   if (actualUser.tipoDeUsuario?.tipo !== "Administrador" || actualUser.tipoDeUsuario?.tipo !== "Super Administrador") {
  //     setLoading(false); // El usuario ya se ha cargado
  //   } else {
  //     // Si currentUser sigue siendo null después de un tiempo de espera, redirige a /login
  //     const timeout1 = setTimeout(() => {
  //       setLoading(false);
  //     }, 5000); // Espera 5 segundos antes de redirigir (ajusta el tiempo según tus necesidades)

  //     return () => clearTimeout(timeout1); // Limpia el temporizador si el componente se desmonta antes de que expire
  //   }
  // }, [actualUser]);   

if (loading) {
  // Muestra una pantalla de carga mientras se verifica la autenticación
  return <div>Cargando...</div>;
}
return actualUser.tipoDeUsuario?.tipo === 'Administrador' ? (
  // Si el usuario está autenticado, muestra el elemento de la ruta
  element
) : (
  // Si el usuario no está autenticado, redirige al usuario a la página de inicio de sesión
  <Navigate to="/registro" replace />
);
};

export default PrivateRoutes;
