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
import ModalLogSig from "./components/ModalLogSig/ModalLogSig";
// import Registro from "./components/Registro/registro";
import { AuthProvider } from "./context/AuthContext";

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
          <Route path={PathRoutes.REGISTER} element={<ModalLogSig />}></Route>
          {/* <Route path={PathRoutes.REGISTRO} element={<Registro />} /> */}
        </Routes>
      </AuthProvider>
      {/* <Footer /> */}
    </>
  );
}

export default App;
