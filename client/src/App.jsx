import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";
// import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
// import Perfil from "./components/PerfilUser/Perfiluser";
import Perfil from "./components/PerfilUser/Perfiluser";
import AgregarMascota from "./components/AgregarMascota/AgregarMascota";
import FilterMascotas from "./components/FilterButtons/FilterButtons";
import Detail from "./components/Detail/Detail";
import PathRoutes from "./helpers/Routes.helper";
import Footer from "./components/Footer/Footer";
import ModalLogSig from "./components/ModalLogSig/ModalLogSig";
import Dashboard from "./components/Dashboard/Dashboard";
import DetailUser from "./components/Dashboard/DetailUser";
import DetailHouse from "./components/Dashboard/detailHouse";
import CasaDeAdopcion from "./components/CasaDeAdopcion/CasaDeAdopcion";
import { NuevoRegistro } from "./components/NewRegis/NewRegistro";
import NewLogin  from "./components/NewRegis/NewLogin";

import Pets from "./components/Dashboard/Pets";
import Users from "./components/Dashboard/Users";
import AdoptionHouses from "./components/Dashboard/AdoptionHouses";
import Donations from "./components/Dashboard/Donations";
import Notificaciones from "./components/Notificaciones/Notificaciones";
import { AuthProvider } from "../context/AuthContext";


function App() {
  const location = useLocation();
  return (
    <>
      <AuthProvider>
        {location.pathname !== "/home" && <Nav />}
        <Routes>
          {/* <Route path={PathRoutes.LANDINGPAGE} element={<Landing />} /> */}
          <Route path={PathRoutes.HOME} element={<Home />} />
          <Route path={PathRoutes.FILTER} element={<FilterMascotas />} />
          <Route path={PathRoutes.PERFIL} element={<Perfil />} />

          <Route path={PathRoutes.DETAIL} element={<Detail />} />
          <Route path={PathRoutes.AGREGAR} element={<AgregarMascota />} />
          <Route path={PathRoutes.REGISTRO} element={<NuevoRegistro />}></Route>
          <Route path={PathRoutes.LOGIN} element={<NewLogin />}></Route>

          <Route
            path={PathRoutes.CASADETAIL}
            element={<CasaDeAdopcion />}
          ></Route>
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

          <Route path={PathRoutes.DETAILUSER} element={<DetailUser />} />
          <Route path={PathRoutes.DETAILHOUSE} element={<DetailHouse />} />
        </Routes>
        {/* <div>{location.pathname !== "/home" && <Footer />}</div> */}

        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;


