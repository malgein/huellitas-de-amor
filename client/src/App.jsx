import "./App.css";
import Home from "./components/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
