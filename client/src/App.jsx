import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import Perfil from "./components/PerfilUser/Perfiluser";
import Detail from "./components/Detail/Detail";
import PathRoutes from "./helpers/Routes.helper";

function App() {
  //<Route path={PathRoutes.FILTER} element={<FilterMascotas />} />
  const location = useLocation();
  return (
    <>
      
      {location.pathname !== '/' && <Nav />}
      <Routes>        
        <Route path={PathRoutes.LANDINGPAGE} element={<Landing />} />
        <Route path={PathRoutes.HOME} element={<Home />} />
        <Route path={PathRoutes.PERFIL} element={<Perfil />} />
        <Route path={PathRoutes.DETAIL} element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
