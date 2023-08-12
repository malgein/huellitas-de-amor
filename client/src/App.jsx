import "./App.css";


import Landing from "./components/Landing/Landing";

import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Perfil from "./components/PerfilUser/Perfiluser";
import FilterMascotas from "./components/FilterButtons/FilterButtons";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/account" element={<Perfil />} />
        <Route path="/filter" element={<FilterMascotas />} />
      </Routes>
    </>
  );
}

export default App;
