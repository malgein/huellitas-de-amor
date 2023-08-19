import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Perfil from "./components/PerfilUser/Perfiluser";
import AgregarMascota from "./components/AgregarMascota/AgregarMascota";

import FilterMascotas from "./components/FilterButtons/FilterButtons";

import Detail from "./components/Detail/Detail";
import PathRoutes from "./helpers/Routes.helper";
import Footer from "./components/Footer/Footer";
//Componente dashboard
import Dashboard from "./components/Dashboard/Dashboard";
//Componente dashboard gestiona mascotas
import Pets from "./components/Dashboard/Pets";
//Componente dashboard gestiona Usuarios
import Users from './components/Dashboard/Users'
//Componente dashboard gestiona casas de adopcion
import AdoptionHouses from './components/Dashboard/AdoptionHouses'
//Componente dashboard gestiona donaciones
import Donations from './components/Dashboard/Donations'


function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <Nav />}
    <Routes>
    	<Route path={PathRoutes.LANDINGPAGE} element={<Landing />} />
      <Route path={PathRoutes.HOME} element={<Home />} />
      <Route path={PathRoutes.FILTER} element={<FilterMascotas />} />
			<Route path={PathRoutes.PERFIL} element={<Perfil />} />
			<Route path={PathRoutes.DETAIL} element={<Detail />} />
			<Route path={PathRoutes.AGREGAR} element={<AgregarMascota />} />
			<Route path={PathRoutes.DASHBOARD} element={<Dashboard/>}/>
			<Route path={PathRoutes.DASHBOARD_MASCOTAS} element={<Pets/>}/>
			<Route path={PathRoutes.DASHBOARD_USUARIOS} element={<Users/>}/>
			<Route path={PathRoutes.DASHBOARD_CASAS_DE_ADOPCION} element={<AdoptionHouses/>}/>
			<Route path={PathRoutes.DASHBOARD_DONACIONES} element={<Donations/>}/>
	</Routes>
			<div>
				{location.pathname !=='/home' && <Footer />}
			</div>
		</>
  );
}

export default App;
