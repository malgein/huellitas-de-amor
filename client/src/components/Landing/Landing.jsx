// import React from 'react';
// import { Link } from 'react-router-dom';
// import backgroundImage from '../../assets/landing.webp'; //esta de prueba ver que ponemos, no lo puedo acomodar 

// function Landing() {
//   return (
//     <div className="relative h-screen w-screen flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
//       <div className="absolute inset-0 bg-black opacity-40"></div>
//       <div className="relative z-10 text-center p-10 text-white">
//         <h1 className="text-5xl font-semibold mb-4">¡Bienvenido a Huellitas de Amor 🐶🦁🥰</h1>
//         <p className="text-2xl mb-8">Entra y encuentra tu amigo ideal</p>
//         <Link to={'/home'} className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full">
//           Ingresar
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Landing;

//ver como queda con este codigo y diseño

import React from 'react';
import { Link } from 'react-router-dom';
import imagenMascota1 from '../../assets/imagenMascota1-min.jpg';
import imagenMascota2 from '../../assets/imagenMascota2-min.jpg';
import imagenMascota3 from '../../assets/imagenMascota3-min.jpg';
import imagenMascota4 from '../../assets/imagenMascota4-min.jpg';
import logo from '../../assets/LogoPrueba.jpg';
function LandingPage() {
  return (
    <div className="p-8 space-y-20">
      <div className="flex items-center justify-between space-x-8">
        <div className="flex-1 p-8">
          <h1 className="text-5xl font-extrabold">Encuentra a tu compañero peludo perfecto</h1>
          <p className="text-lg text-black">¿Buscas adoptar una mascota? Nuestra plataforma te permite crear una página de adopción personalizada para encontrar a tu compañero peludo perfecto.</p>
        </div>
        <div className="flex-1 p-8">
          <img src={imagenMascota1} alt="Mascota" className="rounded-full max-w-full h-auto border-5 border-gray-300 hover:border-red-300 transition-all duration-300" />
        </div>
      </div>
      <div className="flex items-center justify-between space-x-8">
        <div className="flex-1 p-8">
          <img src={imagenMascota2} alt="Mascota" className="rounded-full max-w-full h-auto border-5 border-gray-300 hover:border-red-300 transition-all duration-300" />
        </div>
        <div className="flex-1 p-8">
          <h2 className="text-4xl font-extrabold">Filtra por tipo de mascota, edad y ubicación</h2>
          <p className="text-lg text-black">Con PetPage, puedes filtrar los animales disponibles por tipo, edad y ubicación para encontrar la mascota perfecta que se ajuste a tus preferencias.</p>
        </div>
      </div>
      <div className="flex items-center justify-between space-x-8">
        <div className="flex-1 p-8">
          <h2 className="text-4xl font-extrabold">Diseño minimalista y fácil de usar</h2>
          <p className="text-lg text-black">Nuestra plataforma ofrece un diseño minimalista y fácil de usar, con tarjetas de animales en un fondo blanco. Puedes navegar y encontrar tu mascota ideal de manera intuitiva.</p>
        </div>
        <div className="flex-1 p-8">
          <img src={imagenMascota3} alt="Mascota" className="rounded-full max-w-full h-auto border-5 border-gray-300 hover:border-red-300 transition-all duration-300" />
        </div>
      </div>
      <div className="flex items-center justify-between space-x-8">
  <div className="flex-1 p-8">
    <img src={imagenMascota4} alt="Mascota" className="rounded-full max-w-full h-auto border-5 border-gray-300 hover:border-red-300 transition-all duration-300" />
  </div>
  <div className="flex-1 p-8">
    <h2 className="text-4xl font-extrabold">Diseño minimalista y fácil de usar</h2>
    <p className="text-lg text-black">Nuestra plataforma ofrece un diseño minimalista y fácil de usar, con tarjetas de animales en un fondo blanco. Puedes navegar y encontrar tu mascota ideal de manera intuitiva.</p>
  </div>
</div>
<div className="text-center p-8">
  <h2 className="text-4xl font-extrabold mb-4">No esperes más! Ingresa a Huellitas de Amor y busca la mascota que más te guste! ❤️</h2>
  <Link to="/home" className="inline-block">
    <img src={logo} alt="Logo" className="mx-auto w-[150px] rounded-full border-2 border-gray-300 hover:border-red-400 transition-all duration-300 cursor-pointer" />
  </Link>
</div>

</div>
  );
}

export default LandingPage;

