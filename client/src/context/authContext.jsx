import { createContext, useState, useContext, useEffect } from "react";
import axios from '../api/axios'
import Swal from "sweetalert2";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within a AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) =>{
	const [user, setUser] = useState(null);
	//Estado que nos dice en la app si el usuario se logeo o no
	const [isAuthenticated, setIsAuthenticated] = useState(false)

	const signup = async(user) => {
		try {
			const response = await axios.post('/crearUsuario', user)
			console.log(response.data)
			setUser(response.data)
			Swal.fire(
				'Usuario registrado con exito!',
				'',
				'success'
			)
			setIsAuthenticated(true)
		} catch (error) {
			console.log(error)
			console.log(error?.response?.data?.message)
			if(error?.response?.data?.message === 'email already exists'){
				Swal.fire(
					'No se pudo registrar el usuario!',
					'Ya existe un usuario con ese email',
					'error'
				)
			}
		}
	}
	return (
    <AuthContext.Provider
      value={{
        user,
        signup,
				isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}