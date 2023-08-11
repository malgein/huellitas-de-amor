import React from 'react';
import { Link } from 'react-router-dom';
import PathRoutes from '../../helpers/Routes.helper';

function Landing() {
  return (
    <div className="relative h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('imagen-o-videodefondo.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-center p-10 text-white">
        <h1 className="text-5xl font-semibold mb-4">¡Bienvenido a Huellitas de Amor 🐶🦁🥰 </h1>
        <p className="text-2xl mb-8">Entra y encuentra tu amigo ideal</p>
        <Link to={PathRoutes.laRutaQueVaya} className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full">
          Ingresar
        </Link>
      </div>
    </div>
  ); 
}

export default Landing;
