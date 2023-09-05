import React, { useState, useEffect } from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPetById } from "../../redux/actions";

import { Button, Badge, Avatar, Tooltip } from "@nextui-org/react";
import confetti from "canvas-confetti";

// import { useAuth } from "../../context/AuthContext";

export default function DetailHouse() {
  const { id } = useParams();
  // const { user } = useAuth();

	const [casa, setcasa] = useState([])

  const handleConfetti = () => {
    confetti({});
  };

 const getDetailHouse = async() => {
	const data = await fetch(`http://localhost:3001/casaDeAdopcion/${id}`)

	const dataJson = await data.json()
	setcasa(dataJson)
 }

  useEffect(() => {
    getDetailHouse()
  }, [id]);

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen pt-5 pb-8 ">
      <div className="w-full md:w-4/5 max-w-2xl rounded-lg shadow-md overflow-hidden bg-white">
        <div className="relative">
          {casa?.foto && casa?.foto.length === 1 ? (
            <img
              className="rounded-t-lg w-full h-auto"
              src={casa?.foto[0]}
              alt="Detalle de la Casa de adopcion"
            />
          ) : (
            <Carousel
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              dynamicHeight={true}
            >
              {casa?.foto &&
                casa?.foto.map((fotoUrl, index) => (
                  <img
                    key={index}
                    className="rounded-t-lg object-cover h-[500px] w-full"
                    src={fotoUrl}
                    alt={`Detalle de la casa de Adopcion ${index + 1}`}
                  />
                ))}
            </Carousel>
          )}
          {/* <Badge
            className="absolute top-[-12px] right-[-110px] text-lg text-white"
            content="En Adopcion"
            color="success"
            size="lx"
          ></Badge> */}
        </div>
        <div className="p-4 ">
          <div className="flex items-center mb-2">
            <h1 className="text-3xl font-semibold pl-10 mb-2">
              {casa.nombre}{" "}
            </h1>
            {/* <Tooltip content={casa.sexo}>
              <Button className="m-1 h-10 w-10 font-extrabold text-xl	">
                {casa.sexo == "macho" ? "♂️" : "♀️"}
              </Button>
            </Tooltip> */}
          </div>

          <div className="flex justify-center space-x-4 p-4">
            <div className="w-32 bg-orange-100 rounded-lg shadow-md p-4 flex justify-center">
              <div>
                <h2 className="text-lg font-semibold mb-1">Nombre de la Organizacion</h2>
                <p className="text-gray-500">{casa.nombreDeOng}</p>
              </div>
            </div>
            <div className="w-32 bg-orange-100 rounded-lg shadow-md p-4 flex justify-center">
              <div>
                <h2 className="text-lg font-semibold mb-1">Contacto</h2>
                <p className="text-gray-500">{`${casa.nombreDeContacto}`}</p>
              </div>
            </div>
            <div className="w-32 bg-orange-100 rounded-lg shadow-md p-4 flex justify-center">
              <div>
                <h2 className="text-lg font-semibold mb-1">Correo</h2>
                <p className="text-gray-500">{casa.email}</p>
              </div>
            </div>
            <div className="w-32 bg-orange-100 rounded-lg shadow-md p-4 flex justify-center">
              <div>
                <h2 className="text-lg font-semibold mb-1">Numero de telefono</h2>
                <p className="text-gray-500">
                  {casa.telefono}
                </p>
              </div>
            </div>
          </div>
          <p className="text-black font-semibold text-xl pl-10 pb-2">Ubicacion</p>
          <p className="text-gray-500 text-base pr-10 pl-10 text-justify">
            {casa.ubicacion}
          </p>
        </div>
        <div className="flex justify-between pt-4">
          <div className="flex flex-row">
            {/* <div className="flex items-center pl-12 pb-8">
              {" "}
              <Avatar
                isBordered
                radius="lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMO2GPZ5-cByJTHam2oCwuX6UuxXVjZHNPROq4Kr77KkHmRx5pjoQLBx4y3cNY4Eg-ARM&usqp=CAU"
              />
            </div> */}
            {/* <div className="pl-4">
              <p className="text-gray-500">Posteado por:</p>
              <p className="text-black font-semibold">
                {casa.casaDeAdopcionId === null
                  ? "Casa de Adopcion Pokeamigos"
                  : casa.casaDeAdopcionId}
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