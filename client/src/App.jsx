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
import Users from "./components/Dashboard/Users";
//Componente dashboard gestiona casas de adopcion
import AdoptionHouses from "./components/Dashboard/AdoptionHouses";
//Componente dashboard gestiona donaciones
import Donations from "./components/Dashboard/Donations";

import ModalLogSig from "./components/ModalLogSig/ModalLogSig";
import { AuthProvider } from "./context/authContext";
// import Registro from "./components/Registro/Registro";
import Registro from "./components/Registro/Registro";

function App() {
  const location = useLocation();
  return (
    <>
      <AuthProvider>
        {location.pathname !== "/" && <Nav />}
        <Routes>
          <Route path={PathRoutes.LANDINGPAGE} element={<Landing />} />
          <Route path={PathRoutes.HOME} element={<Home />} />
          <Route path={PathRoutes.FILTER} element={<FilterMascotas />} />
          <Route path={PathRoutes.PERFIL} element={<Perfil />} />
          <Route path={PathRoutes.DETAIL} element={<Detail />} />
          <Route path={PathRoutes.AGREGAR} element={<AgregarMascota />} />
          <Route Path={PathRoutes.REGISTRO} element={<Registro />}></Route>
          {/* Componente dashboard  */}
          <Route path={PathRoutes.DASHBOARD} element={<Dashboard />} />
          {/* Subruta de dashboard que gestiona las mascotas para ek admin */}
          <Route path={PathRoutes.DASHBOARD_MASCOTAS} element={<Pets />} />
          {/* Subruta de dashboard que gestiona los usuarios para el admin */}
          <Route path={PathRoutes.DASHBOARD_USUARIOS} element={<Users />} />
          {/* Subruta de dashboard que gestiona las casas de adopcion para el admin */}
          <Route
            path={PathRoutes.DASHBOARD_CASAS_DE_ADOPCION}
            element={<AdoptionHouses />}
          />
          {/* Subruta de dashboard que gestiona las donaciones para el admin */}
          <Route
            path={PathRoutes.DASHBOARD_DONACIONES}
            element={<Donations />}
          />
        </Routes>
        <div>{location.pathname !== "/home" && <Footer />}</div>
      </AuthProvider>
      {/* <Footer /> */}
    </>
  );
}

export default App;
