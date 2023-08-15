import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderByWeight, orderByAge } from "../../redux/actions";
import flechaAbajo from "../../assets/flecha-hacia-abajo.png";
import flechaArriba from "../../assets/flecha-hacia-arriba.png";
import peso from "../../assets/peso.png";
import edad from "../../assets/la-edad.png";

import { Tabs, Tab } from "@nextui-org/react";

const Sorts = () => {
  const dispatch = useDispatch();
  const mascotas = useSelector((state) => state.pets);
  const [selectedTab, setSelectedTab] = useState("defecto"); // Estado para mantener el valor de la pestaña seleccionada

  const handleWeight = (order) => {
    dispatch(orderByWeight(order));
    setSelectedTab(order); // Actualiza la pestaña seleccionada
    console.log(mascotas);
  };

  const handleAge = (order) => {
    dispatch(orderByAge(order));
    setSelectedTab(order); // Actualiza la pestaña seleccionada
    console.log(mascotas);
  };

  return (
    <div className="flex flex-wrap justify-around pt-5 mt-5 mb-10 orders">
      {/* <div className="flex flex-col"> */}
      {/* <h5 className="mb-0">Ordenar por peso</h5> */}
      {/* Orden por peso */}
      {/* <select
          onChange={(e) => handleWeight(e.target.value)}
          className="w-11/12 px-4 py-2 border-2 border-gray-300 rounded-md mt-2 focus:outline-none focus:border-blue-500"
        >
          <option value="defecto">Defecto</option>
          <option value="ascendente">Ascendente</option>
          <option value="descendente">Descendente</option>
        </select> */}
      {/* </div> */}
      {/* <div className="flex flex-col">
        <h5 className="mb-0">Ordenar por edad</h5> */}
      {/* Orden por edad */}
      {/* <select
          onChange={(e) => handleAge(e.target.value)}
          className="w-11/12 px-4 py-2 border-2 border-gray-300 rounded-md mt-2 focus:outline-none focus:border-blue-500"
        >
          <option value="defecto">Defecto</option>
          <option value="ascendente">Ascendente</option>
          <option value="descendente">Descendente</option>
        </select> */}
      {/* </div> */}
      <div className="flex flex-col">
        <div className="flex w-full flex-row items-center pl-[90px]">
          <img src={edad} className="w-6 h-6 mr-2" />
          <Tabs aria-label="Options" color="primary" variant="bordered">
            <Tab
              value="defecto"
              key="defecto"
              selected={selectedTab === "defecto"}
              title={
                <div
                  onClick={() => handleAge("defecto")}
                  className="flex items-center space-x-2 cursor-pointer pl-2"
                >
                  <span>Defecto</span>
                </div>
              }
            />
            <Tab
              value="ascendente"
              key="ascendente"
              selected={selectedTab === "ascendente"}
              title={
                <div
                  onClick={() => handleAge("ascendente")}
                  className="flex items-center  space-x-2 cursor-pointer"
                >
                  <img src={flechaArriba} className="w-2" />

                  <span>Ascendente</span>
                </div>
              }
            />
            <Tab
              value="descendente"
              key="descendente"
              selected={selectedTab === "descendente"}
              title={
                <div
                  onClick={() => handleAge("descendente")}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <img src={flechaAbajo} className="w-2" />
                  <span>Descendente</span>
                </div>
              }
            />
          </Tabs>

          <div className="flex w-full flex-row items-center pl-[90px]">
            <div>
              <img src={peso} className="w-6 h-6 mr-2 " />
            </div>
            <Tabs aria-label="Options" color="primary" variant="bordered">
              <Tab
                value="defecto"
                key="defecto"
                selected={selectedTab === "defecto"}
                title={
                  <div
                    onClick={() => handleWeight("defecto")}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <span>Defecto</span>
                  </div>
                }
              />

              <Tab
                value="ascendente"
                key="ascendente"
                selected={selectedTab === "ascendente"}
                title={
                  <div
                    onClick={() => handleWeight("ascendente")}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <img src={flechaArriba} className="w-2" />
                    <span>Ascendente</span>
                  </div>
                }
              />
              <Tab
                value="descendente"
                key="descendente"
                selected={selectedTab === "descendente"}
                title={
                  <div
                    onClick={() => handleWeight("descendente")}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <img src={flechaAbajo} className="w-2" />
                    <span>Descendente</span>
                  </div>
                }
              />
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sorts;
