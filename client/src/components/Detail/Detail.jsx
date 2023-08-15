import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPetById } from "../../redux/actions";

import { Button, Badge, Avatar, Tooltip } from "@nextui-org/react";
import confetti from "canvas-confetti";


export default function Detail() {
  const { id } = useParams();

  const handleConfetti = () => {
    confetti({});
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPetById(id));
  }, [dispatch, id]);

  const mascota = useSelector((state) => state.petDetail);

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen pt-5 pb-8 ">
      <div className="w-full md:w-4/5 max-w-2xl rounded-lg shadow-md overflow-hidden bg-white">
        <div className="relative">
          <img
            className="rounded-t-lg w-full h-auto"
            src="https://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg"
            alt="Detalle del perro"
          />
          <Badge
            className="absolute top-[-12px] right-[-110px] text-lg text-white"
            content="En Adopcion"
            color="success"
            size="lx"
          ></Badge>
        </div>
        <div className="p-4 ">
          <div className="flex items-center mb-2">
            <h1 className="text-3xl font-semibold pl-10 mb-2">
              {mascota.nombre}{" "}
            </h1>

            <Tooltip content="Hembra">
              <Button className="m-1 h-10 w-10"></Button>
            </Tooltip>
          </div>

          <div className="flex justify-center space-x-4 p-4">
            <div className="w-32 bg-orange-100 rounded-lg shadow-md p-4 flex justify-center">
              <div>
                <h2 className="text-lg font-semibold mb-1">Tamaño</h2>
                <p className="text-gray-500">Mediano</p>
              </div>
            </div>
            <div className="w-32 bg-orange-100 rounded-lg shadow-md p-4 flex justify-center">
              <div>
                <h2 className="text-lg font-semibold mb-1">Peso</h2>
                <p className="text-gray-500">10 kg</p>
              </div>
            </div>
            <div className="w-32 bg-orange-100 rounded-lg shadow-md p-4 flex justify-center">
              <div>
                <h2 className="text-lg font-semibold mb-1">Especie</h2>
                <p className="text-gray-500">Canino</p>
              </div>
            </div>
            <div className="w-32 bg-orange-100 rounded-lg shadow-md p-4 flex justify-center">
              <div>
                <h2 className="text-lg font-semibold mb-1">Edad</h2>
                <p className="text-gray-500">3 años</p>
              </div>
            </div>
          </div>
          <p className="text-black font-semibold text-xl pl-10 pb-2">Detalle</p>
          <p className="text-gray-500 text-base pr-10 pl-10 text-justify">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
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
              <p className="text-black font-semibold">
                Casa de Adopcion Pokeamigos
              </p>
            </div>
          </div>
          <div className="px-4 py-2 bg-white pb-8 flex items-center">
            <Button
              radius="full"
              className="bg-blue-500 text-white hover:bg-blue-600"
              onPress={handleConfetti}
            >
              Adóptame
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
