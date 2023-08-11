import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Perfil from "./components/PerfilUser/Perfiluser";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/account" element={<Perfil />} />
      </Routes>
    </>
  );
}

export default App;
