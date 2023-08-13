import "./App.css";

import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Perfil from "./components/PerfilUser/Perfiluser";
import Sorts from "./components/Sorts/Sorts";

import FilterMascotas from "./components/FilterButtons/FilterButtons";

import Detail from "./components/Detail/Detail";
import PathRoutes from "./helpers/Routes.helper";


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path={PathRoutes.LANDINGPAGE} element={<LandingPage />} />
        <Route path={PathRoutes.HOME} element={<Home />} />
        <Route path={PathRoutes.FILTER} element={<FilterMascotas />} />
        <Route path={PathRoutes.PERFIL} element={<Perfil />} />
        <Route path={PathRoutes.DETAIL} element={<Detail />} />
        <Route path={PathRoutes.SORTS} element={<Sorts />} />
      </Routes>
    </>
  );
}

export default App;
