import { useAuth } from "../../context/authContext"
import { Navigate, Outlet } from "react-router-dom"
import Error404 from "../Error404/Error404"

const AuthorizationAdmin = () => {
//Nos traemos el estado de carga y el indicativo de si esta autenticado o no del conetxt
	const {loading, isAuthenticated, user} = useAuth()
  console.log(loading, user)
	// const navigate = Navigate()

  //Si esta cargando  devuelve un texto de loading
  //Si no esta cargando y el indicativo de que esta autenticado dice falso entonces te reenvia a navigate, si ninguna de las dos se cumplre envi a lo que tiene dentro que son las rutas que estan protegidas en app.jsx el profile, las tasks, el create tasks , etc
  //! El loading es crucial para el paso de las rutas protegidas , pues este o no el usuario autenticado este estado no se establece inmediatamente y te reedirecciona a login estes autenticado o no, el loadin crea un estado de espera que se asegura de que el tiempo para que se setee el estado de autenticacion sea el adecuado
  if(loading) return <h1>...Loading</h1>
	if(!loading && user?.tipoDeUsuario === 'Administrador') return <Outlet />  //<Navigate to='/login' replace />
   return <Navigate to='/error' replace />
}

export default AuthorizationAdmin