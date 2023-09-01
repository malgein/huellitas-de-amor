import React, {  useEffect } from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCasaById, getPetById, logicalDeletePet } from "../../redux/actions";

import { Button, Badge, Avatar, Tooltip } from "@nextui-org/react";
import confetti from "canvas-confetti";

import iconMacho from "../../assets/macho.png";
import iconHembra from "../../assets/hembra.png";
import PathRoutes from "../../helpers/Routes.helper";
import { useAuth } from "../../../../server/src/context/AuthContext";

export default function Detail() {
  const { id } = useParams();
  const { user } = useAuth();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getPetById(id));
  }, [dispatch, id]);

  const mascota = useSelector((state) => state.petDetail);

  useEffect(() => {
    if (mascota.casaDeAdopcionId) {
      dispatch(getCasaById(mascota.casaDeAdopcionId));
    if (mascota.casaDeAdopcionId) {
      dispatch(getCasaById(mascota.casaDeAdopcionId));
    }
  }, [dispatch, mascota.casaDeAdopcionId]);

  if (!mascota) {
    return <p> Aguarde unos Instantes...</p>;
  }

  
  // const handleConfetti = () => {
  //   confetti({});
  // };
  
  // const handleAdopcion = () => {
  //   dispatch(logicalDeletePet(id));
  //   handleConfetti();
  // };
  // const handleBorrado = () => {
  //   dispatch(logicalDeletePet(id)); // Marca la mascota como borrada
  //   // Agregar aquí cualquier otra lógica que necesites después del borrado
  // };


  
  const casa = useSelector((state) => state.casasDeAdopcion);
  const isAdopted = mascota.estado === "adoptado";
  const isInProcess = mascota.estado === "en proceso";
  const isAvailableForAdoption = mascota.estado === "en Adopción";
 
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen pt-5 pb-8 ">
      <div className="w-full md:w-4/5 max-w-2xl rounded-lg shadow-md overflow-hidden bg-white">
        <div className="relative">
          {mascota.foto && mascota.foto.length === 1 ? (
            <img
              className="rounded-t-lg w-full h-auto"
              src={mascota.foto[0]}
              alt="Detalle del perro"
            />
          ) : (
            <Carousel
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              dynamicHeight={true}
            >
              {mascota.foto &&
                mascota.foto.map((fotoUrl, index) => (
                  <img
                    key={index}
                    className="rounded-t-lg object-cover h-[500px] w-full"
                    src={fotoUrl}
                    alt={`Detalle del perro ${index + 1}`}
                  />
                ))}
            </Carousel>
          )}
          <Badge
            className={`absolute top-[-12px] right-[-110px] text-lg text-white ${
              isAdopted ? "text-uppercase font-bold" : ""
            }`}
            content={
              isAdopted
                ? "Adoptado"
                : isInProcess
                ? "En Proceso"
                : isAvailableForAdoption
                ? "En Adopción"
                : ""
            }
            color={
              isAdopted
                ? "danger"
                : isInProcess
                ? "warning"
                : isAvailableForAdoption
                ? "success"
                : ""
            }
            size="lx"
          ></Badge>

        </div>
        <div className="p-4 ">
          <div className="flex items-center mb-2">
            <h1 className="text-3xl font-semibold pl-10 mb-2">
              {mascota.nombre}{" "}
            </h1>
            <Tooltip content={mascota.sexo}>
              <Button className="m-1 h-10 w-10 font-extrabold text-xl	">
                {mascota.sexo == "macho" ? "♂️" : "♀️"}
              </Button>
            </Tooltip>
          </div>

          <div className="flex justify-center space-x-4 p-4">
            <div className="w-32 bg-orange-100 rounded-lg shadow-md p-4 flex justify-center">
              <div>
                <h2 className="text-lg font-semibold mb-1">Tamaño</h2>
                <p className="text-gray-500">{mascota.tamano}</p>
              </div>
            </div>
            <div className="w-32 bg-orange-100 rounded-lg shadow-md p-4 flex justify-center">
              <div>
                <h2 className="text-lg font-semibold mb-1">Peso</h2>
                <p className="text-gray-500">{`${mascota.peso} kg`}</p>
              </div>
            </div>
            <div className="w-32 bg-orange-100 rounded-lg shadow-md p-4 flex justify-center">
              <div>
                <h2 className="text-lg font-semibold mb-1">Raza</h2>
                <p className="text-gray-500">{mascota.raza}</p>
              </div>
            </div>
            <div className="w-32 bg-orange-100 rounded-lg shadow-md p-4 flex justify-center">
              <div>
                <h2 className="text-lg font-semibold mb-1">Edad</h2>
                <p className="text-gray-500">
                  {mascota.edad >= 2
                    ? `${mascota.edad} años`
                    : `${mascota.edad} año`}
                </p>
              </div>
            </div>
          </div>
          <p className="text-black font-semibold text-xl pl-10 pb-2">Detalle</p>
          <p className="text-gray-500 text-base pr-10 pl-10 text-justify">
            {mascota.descripcion}
          </p>
        </div>
        <div className="flex justify-between pt-4">
          <div className="flex flex-row">
            <div className="flex items-center pl-12 pb-8">
              {" "}
              <Avatar
                isBordered
                radius="lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMO2GPZ5-cByJTHam2oCwuX6UuxXVjZHNPROq4Kr77KkHmRx5pjoQLBx4y3cNY4Eg-ARM&usqp=CAU"
              />
            </div>
            <div className="pl-4">
              <p className="text-gray-500">Posteado por:</p>
              <Link to={PathRoutes.CASADETAIL.replace(":id", casa.id)}>
                <p className="text-black font-semibold">
                  {casa.nombreDeOng === null
                    ? "Casa de Adopcion"
                    : casa.nombreDeOng}
                </p>
              </Link>
            </div>
          </div>
          <div className="px-14 py-2 bg-white pb-8 flex items-center">
          {user ? (
              <StateControlButton
                id={id}
                currentState={mascota.estado}
                user={user}
              />
            ) : (
              <Link to="/registro">
                <Button radius="full" color="primary">
                  Adóptame
                </Button>
            </Link>
          )}
        </div>
        
        <Link>
          <Button>Volver</Button>
        </Link>
        </div>
      </div>
    </div>
  );
}
