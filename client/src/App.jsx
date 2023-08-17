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
//Componente de cesta de adopcion
import Bascket from "./components/Bascket/Bascket";

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
			//Cesta de adopcion
			<Route path={PathRoutes.BASCKET} element={<Bascket />}></Route>
	</Routes>
			<div>
				{location.pathname !=='/home' && <Footer />}
			</div>
		</>
  );
}

export default App;
