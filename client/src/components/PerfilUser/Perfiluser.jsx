import React, { useState } from "react";
// import styles from "./perfil.module.css";
import { Link, Button, Image } from "@nextui-org/react";
import fotoPerfil from "../../assets/fotoPerfil.jpg";
import EditarPerfil from "../EditarPerfil/EditarPerfil";

const Perfil = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };
  return (
    <div className="border-2 flex flex-col max-w-3xl rounded-2xl shadow-lg  ml-2">
      <div className="flex flex-row items-center gap-5 ml-2 mt-2">
        <Image
          width={120}
          height={120}
          src={fotoPerfil}
          alt="Foto de perfil"
          className="border-2 rounded-full"
        />
        <div className="flex flex-col ">
          <h1>Juan Pérez</h1>
          <p className=" text-slate-400">Buenos Aires, Argentina</p>
        </div>
      </div>
      <div className="mt-5 ml-2">
        <h2>Acerca de Mí</h2>
        <p>
          ¡Hola! Soy Juan, un amante de los animales. Adopté a mi compañero
          peludo hace 3 años y nuestra vida juntos ha sido increíble. Me encanta
          pasear, jugar y disfrutar de momentos especiales con él. Estamos
          buscando una nueva amiga peluda para unirse a nuestra familia.
          ¡Siempre estoy emocionado por conocer nuevas mascotas y darles un
          hogar lleno de amor!
        </p>
      </div>
      <div className="mt-3 mb-3 ml-2">
        <h2>Contacto</h2>
        <p className=" text-slate-400">
          Correo electrónico: juan.perez@example.com
        </p>
        <p className=" text-slate-400">Teléfono: (123) 456-7890</p>
        <p className=" text-slate-400">Redes sociales: @juanperez</p>
      </div>
      <div className="mb-3 ml-2">
        <Button color="primary" variant="solid" onClick={toggleFormulario}>
          Editar perfil
        </Button>
        {/* <button>Editar Perfil</button> */}
      </div>

      {mostrarFormulario && <EditarPerfil />}
    </div>
  );
};

export default Perfil;
