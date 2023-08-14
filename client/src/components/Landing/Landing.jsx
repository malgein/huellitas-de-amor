import React from "react";
import { Link } from "react-router-dom";
import imagenMascota1 from "../../assets/imagenMascota1-min.jpg";

import banner1 from "../../assets/banner1.png";
import huella1 from "../../assets/h1.png";
import huella2 from "../../assets/h2.png";
import huella3 from "../../assets/h3.png";
import huella4 from "../../assets/h4.png";
import huella5 from "../../assets/h5.png";
import ovalo from "../../assets/vo1.png";

import imagenMascota2 from "../../assets/imagenMascota2-min.jpg";
import imagenMascota3 from "../../assets/imagenMascota3-min.jpg";
import imagenMascota4 from "../../assets/imagenMascota4-min.jpg";
import logo from "../../assets/LogoPrueba.jpg";
function LandingPage() {
  return (
    <div className="p-8 space-y-10 md:space-y-20">
      <div className="absolute inset-0 z-[-1]">
        <img src={banner1} alt="banner 1" />
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 items-center md:mt-[-20px]">
        <div>
          <h4 className="font-bold text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-300">
            ¡Bienvenidos a Huellitas de Amor!
          </h4>
          <h1 className="font-extrabold text-2xl md:text-4xl mt-2">
            Un espacio donde los latidos de los 🧡 <br />
            peludos encuentran un hogar para siempre.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-300">
              Huellitas de Amor 🐾
            </span>
          </h1>
        </div>
        <div className="mt-4 md:mt-0">
          <img
            src={imagenMascota1}
            alt="Mascota"
            className="rounded-full max-w-full h-auto md:max-w-[400px] lg:max-w-[600px] drop-shadow-2xl border-gray-300"
          />
        </div>
        <div className="absolute inset-0 pt-[50px] pl-[400px]">
          <img src={huella1} alt="" />
        </div>
        <div className="absolute inset-0 pt-[50px] pl-[400px]">
          <img src={huella2} alt="" />
        </div>
        <div className="absolute inset-0 pt-[50px] pl-[400px]">
          <img src={huella3} alt="" />
        </div>
        <div className="absolute inset-0 pt-[50px] pl-[400px]">
          <img src={huella4} alt="" />
        </div>
        <div className="absolute inset-0 pt-[50px] pl-[400px]">
          <img src={huella5} alt="" />
        </div>
        <div className="absolute inset-0 pt-[100px] pl-[400px]">
          <img src={ovalo} alt="" />
        </div>

        <div className="mt-4 md:mt-6 flex flex-col md:flex-row gap-4 md:gap-7">
          <Link to="/home" className="inline-block">
            <button className="bg-gradient-to-r from-orange-500 to-amber-300 px-4 py-2 text-white rounded-full hover:scale-105 transition-all duration-300 md:relative md:top-[-10px] lg:relative lg:top-[-80px]">
              Conoce más
            </button>
          </Link>
        </div>
      </div>

      {/* <div className="flex items-center justify-between space-x-8">
        <div className="flex-1 p-8">
          <h1 className="text-5xl font-extrabold">
            Encuentra a tu compañero peludo perfecto
          </h1>
          <p className="text-lg text-black">
            ¿Buscas adoptar una mascota? Nuestra plataforma te permite crear una
            página de adopción personalizada para encontrar a tu compañero
            peludo perfecto.
          </p>
        </div>
        <div className="flex-1 p-8"></div>
      </div>
      <div className="flex items-center justify-between space-x-8">
        <div className="flex-1 p-8">
          <img
            src={imagenMascota2}
            alt="Mascota"
            className="rounded-full max-w-full h-auto border-5 border-gray-300 hover:border-red-300 transition-all duration-300"
          />
        </div>
        <div className="flex-1 p-8">
          <h2 className="text-4xl font-extrabold">
            Filtra por tipo de mascota, edad y ubicación
          </h2>
          <p className="text-lg text-black">
            Con Huellitas de Amor, puedes filtrar los animales disponibles por
            tipo, edad y ubicación para encontrar la mascota perfecta que se
            ajuste a tus preferencias.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between space-x-8">
        <div className="flex-1 p-8">
          <h2 className="text-4xl font-extrabold">
            Diseño minimalista y fácil de usar
          </h2>
          <p className="text-lg text-black">
            Nuestra plataforma ofrece un diseño minimalista y fácil de usar, con
            tarjetas de animales en un fondo blanco. Puedes navegar y encontrar
            tu mascota ideal de manera intuitiva.
          </p>
        </div>
        <div className="flex-1 p-8">
          <img
            src={imagenMascota3}
            alt="Mascota"
            className="rounded-full max-w-full h-auto border-5 border-gray-300 hover:border-red-300 transition-all duration-300"
          />
        </div>
      </div>
      <div className="flex items-center justify-between space-x-8">
        <div className="flex-1 p-8">
          <img
            src={imagenMascota4}
            alt="Mascota"
            className="rounded-full max-w-full h-auto border-5 border-gray-300 hover:border-red-300 transition-all duration-300"
          />
        </div>
        <div className="flex-1 p-8">
          <h2 className="text-4xl font-extrabold">
            Interactúa con los animales que te gustan
          </h2>
          <p className="text-lg text-black">
            Con PetPage, puedes darle "me gusta" a los animales que te gustan y
            mostrar tu interés. Esto ayuda a los refugios y rescatistas a
            conocer tus preferencias y encontrar la mejor opción para ti.
          </p>
        </div>
      </div>
      <div className="text-center p-8">
        <h2 className="text-4xl font-extrabold mb-4">
          No esperes más! Ingresa a Huellitas de Amor y busca la mascota que más
          te guste! ❤️
        </h2>
        <Link to="/home" className="inline-block">
          <img
            src={logo}
            alt="Logo"
            className="mx-auto w-[150px] rounded-full border-2 border-gray-300 hover:border-red-400 transition-all duration-300 cursor-pointer"
          />
        </Link>
      </div> */}
    </div>
  );
}

export default LandingPage;
