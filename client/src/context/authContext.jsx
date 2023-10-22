import { createContext, useState, useContext, useEffect } from "react";
import axios from '../api/axios'
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within a AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) =>{
	const [usuario, setUsuario] = useState(null);
	//Estado que nos dice en la app si el usuario se logeo o no
	const [autenticado, setAutenticado] = useState(false)

	const navigate = useNavigate()

	//Estado que simulara un ambiente de carga mientras  se muestran cierto datosy se monta el componente
  const [cargando, setCargando] = useState(true)

	const signup = async(user) => {
		try {
			const response = await axios.post('/crearUsuario', user)
			console.log(response.data)
			setUsuario(response.data)
			Swal.fire(
				'Usuario registrado con exito!',
				'',
				'success'
			)
			setAutenticado(true)
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

	const signin = async (user) => {
		try {
			const res = await axios.post('/loginUser', user)
			console.log(res)
			setUsuario(res.data)
			const Toast = Swal.mixin({
				toast: true,
				position: 'center',
				showConfirmButton: false,
				timer: 3000,
				timerProgressBar: true,
				didOpen: (toast) => {
					toast.addEventListener('mouseenter', Swal.stopTimer)
					toast.addEventListener('mouseleave', Swal.resumeTimer)
				}
			})
			
			Toast.fire({
				icon: 'success',
				title: 'Inicio de sesion exitoso'
			})
			setAutenticado(true)
		} catch (error) {
			console.log(error);
			if(error?.response?.data?.message === 'user not found'){
				Swal.fire(
					'No se pudo iniciar sesion!',
					'El usuario con dicho email no existe',
					'error'
				)
			} else if(error?.response?.data?.message === 'invalid password'){
				Swal.fire(
					'No se pudo iniciar sesion!',
					'password incorrecta',
					'error'
				)
			}
		}
	}

	const deslogear = () =>{
		// navigate('/login')
    Cookies.remove('token')
    setAutenticado(false)
    setUsuario(null)
  }


	useEffect(() => {
		// const cookies = Cookies.get()

		// console.log(cookies)

		// if(cookies.token){
		// 	// console.log(cookies.token)

		// }
		    //Verifica si al montar el componente hay una cookie, cuando recargamos la pagina o pasamos a otra parte de la app se borran los estados, esto es para determinar que hay una cookie con un token y por tanto dejarme pasar a las rutas que necesitan autenticacion
				async function checkLogin(){
					const cookies = Cookies.get()
				 //  console.log(cookies)
			 
				 //verificca si el token lo tiene el navegador si ya se encuantra autenticado, si no es asi torna el usuario en nulo y el isAuthenticated en false y el loading el false lo que deberia de reedicreccionar al login 
					if(!cookies.token){
					 setAutenticado(false)
					 setCargando(false)
					 return setUsuario(null)
					}
					 // console.log(cookies.token)
					 try {
						 //aplica la funcion de verificar el token que nos traemos de la carpeta api que al mismo tiempo se trae del backend verifica el cookies.token a ver si es valido
						 const res = await axios.get('/verify');
						 // console.log(res);
						 //si no es valido torna el isauthenticated en false y el estado de carga en false tambien para que se detenga el spiner
						 if (!res.data) {
							 setAutenticado(false);
							 setCargando(false)
							 return
						 }
						 //si es valido  torna el isauthenticated en true le pasa al estado user global el los datos que necesitamos del usuario guardado 
						 setAutenticado(true);
						 setUsuario(res.data);
						 setCargando(false)
					 } catch (error) {
						 console.log(error)
						 setAutenticado(false);
						 setUsuario(null)
						 setCargando(false)
					 }	
				}
				checkLogin();		 
	}, [])
	
	return (
    <AuthContext.Provider
      value={{
        usuario,
        signup,
			 	autenticado,
				signin, 
				cargando,
				deslogear
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}