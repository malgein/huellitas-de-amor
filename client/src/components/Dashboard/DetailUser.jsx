import React, { useState, useEffect } from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPetById } from "../../redux/actions";

import { Button, Badge, Avatar, Tooltip } from "@nextui-org/react";
import confetti from "canvas-confetti";

// import iconMacho from "../../assets/macho.png";
// import iconHembra from "../../assets/hembra.png";
// import { useAuth } from "../../context/AuthContext";

export default function DetailUser() {
  const { id } = useParams();
  // const { user } = useAuth();

	const [usuario, setUsuario] = useState([])

  const handleConfetti = () => {
    confetti({});
  };

 const getDetailUser = async() => {
	const data = await fetch(`http://localhost:3001/usuario/${id}`)

	const dataJson = await data.json()
	setUsuario(dataJson)
 }

  useEffect(() => {
    getDetailUser()
  }, [id]);

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen pt-5 pb-8 ">
      {console.log(usuario)}
      <div className="w-full md:w-4/5 max-w-2xl rounded-lg shadow-md overflow-hidden bg-white">
        <div className="relative">
          {usuario?.foto && usuario?.foto.length === 1 ? (
            <img
              className="rounded-t-lg w-full h-auto"
              src={usuario?.foto[0]}
              alt="Detalle del Usuario"
            />
          ) : (
            <Carousel
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              dynamicHeight={true}
            >
              {usuario?.foto &&
                usuario?.foto.map((fotoUrl, index) => (
                  <img
                    key={index}
                    className="rounded-t-lg object-cover h-[500px] w-full"
                    src={fotoUrl}
                    alt={`Detalle del usuario ${index + 1}`}
                  />
                ))}
            </Carousel>
          )}
          <Badge
            className="absolute top-[20px] right-[-110px] text-lg text-white"
            content={usuario.tipoDeUsuario?.tipo}
            color="success"
            size="lx"
          ></Badge>
        </div>
        <div className="p-4 ">
          <div className="flex items-center mb-2">
            <h1 className="text-3xl font-semibold pl-10 mb-2">
              {usuario.nombre} {usuario.apellido}
            </h1>
            {/* <Tooltip content={usuario.sexo}>
              <Button className="m-1 h-10 w-10 font-extrabold text-xl	">
                {usuario.sexo == "macho" ? "♂️" : "♀️"}
              </Button>
            </Tooltip> */}
          </div>

          <div className="flex justify-center space-x-4 p-4">
            <div className="w-32 bg-orange-100 rounded-lg shadow-md p-4 flex justify-center">
              <div>
                <h2 className="text-lg font-semibold mb-1">Nacionaliad</h2>
                <p className="text-gray-500">{usuario.nacionalidad}</p>
              </div>
            </div>
            <div className="w-32 bg-orange-100 rounded-lg shadow-md p-4 flex justify-center">
              <div>
                <h2 className="text-lg font-semibold mb-1">Ubicacion</h2>
                <p className="text-gray-500">{`${usuario.ubicacion}`}</p>
              </div>
            </div>
            <div className="w-32 bg-orange-100 rounded-lg shadow-md p-4 flex justify-center">
              <div>
                <h2 className="text-lg font-semibold mb-1">Correo</h2>
                <p className="text-gray-500">{usuario.email}</p>
              </div>
            </div>
            <div className="w-32 bg-orange-100 rounded-lg shadow-md p-4 flex justify-center">
              <div>
                <h2 className="text-lg font-semibold mb-1">Numero de telefono</h2>
                <p className="text-gray-500">
                  {usuario.telefono}
                </p>
              </div>
            </div>
          </div>
          <p className="text-black font-semibold text-xl pl-10 pb-2">Detalle</p>
          <p className="text-gray-500 text-base pr-10 pl-10 text-justify">
            {usuario.acerca}
          </p>
        </div>
        <div className="flex justify-between pt-4">
          <div className="flex flex-row">
            <div className="flex items-center pl-12 pb-8">
              {" "}
              {/* <Avatar
                isBordered
                radius="lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMO2GPZ5-cByJTHam2oCwuX6UuxXVjZHNPROq4Kr77KkHmRx5pjoQLBx4y3cNY4Eg-ARM&usqp=CAU"
              /> */}
              <h1>Donaciones</h1>
              {!usuario.donacions ? (
                <>No tienes Donaciones</>
              ): (
                <>
                  <ul>
                    <li>Fecha de donaciones</li>
                    <li>{usuario.donacions.fechaDonacion}</li>
                  </ul>
                </>
              )}
            </div>
            {/* <div className="pl-4">
              <p className="text-gray-500">Posteado por:</p>
              <p className="text-black font-semibold">
                {usuario.casaDeAdopcionId === null
                  ? "Casa de Adopcion Pokeamigos"
                  : usuario.casaDeAdopcionId}
              </p>
            </div> */}
          </div>
          {/* <div className="px-14 py-2 bg-white pb-8 flex items-center">
            {user ? (
              <Button
                radius="full"
                className="bg-blue-500 text-white hover:bg-blue-600 "
                onPress={handleConfetti}
              >
                Adóptame
              </Button>
            ) : (
              <Link to="/registro">
                <Button radius="full" color="primary">
                  Adóptame
                </Button>
              </Link>
            )}
          </div> */}
        </div>

      </div>
    </div>
     
  );
}