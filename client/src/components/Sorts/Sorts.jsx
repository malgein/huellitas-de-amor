import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderByWeight, orderByAge } from "../../redux/actions";
import flechaAbajo from "../../assets/flecha-hacia-abajo.png";
import flechaArriba from "../../assets/flecha-hacia-arriba.png";
import peso from "../../assets/peso.png";
import edad from "../../assets/la-edad.png";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const Sorts = () => {
  const dispatch = useDispatch();
  const mascotas = useSelector((state) => state.pets);
  const [selectedTab, setSelectedTab] = useState("defecto");

  const handleWeight = (order) => {
    dispatch(orderByWeight(order));
    setSelectedTab(order);
    console.log(mascotas);
  };

  const handleAge = (order) => {
    dispatch(orderByAge(order));
    setSelectedTab(order);
    console.log(mascotas);
  };

  return (
    <div className="flex flex-wrap justify-around gap-10 pt-5 mt-5 mb-10 orders">
      <div className="flex flex-col">
        <Dropdown>
          <DropdownTrigger>
            <Button className="border border-orange-300  bg-white hover:bg-sky-100 cursor-pointer">
              <span>Ordenar por edad</span>
            </Button>
          </DropdownTrigger>

          <DropdownMenu>
            {/* <DropdownItem onClick={() => handleAge("defecto")}>
              <div className="flex items-center space-x-2 cursor-pointer">
                <img src={flechaAbajo} className="w-2" alt="Defecto" />
                <span>Defecto</span>
              </div>
            </DropdownItem> */}

            <DropdownItem onClick={() => handleAge("ascendente")}>
              <div className="flex items-center space-x-2 cursor-pointer">
                <img src={flechaArriba} className="w-2" alt="Ascendente" />
                <span>Ascendente</span>
              </div>
            </DropdownItem>

            <DropdownItem onClick={() => handleAge("descendente")}>
              <div className="flex items-center space-x-2 cursor-pointer">
                <img src={flechaAbajo} className="w-2" alt="Descendente" />
                <span>Descendente</span>
              </div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className="flex flex-col">
        <Dropdown>
          <DropdownTrigger>
            <Button className="border border-orange-300  bg-white hover:bg-sky-100 cursor-pointer">
              <span>Ordenar por peso</span>
            </Button>
          </DropdownTrigger>

          <DropdownMenu>
            {/* <DropdownItem onClick={() => handleWeight("defecto")}>
              <div className="flex items-center space-x-2 cursor-pointer">
                <img src={flechaAbajo} className="w-2" alt="Defecto" />
                <span>Defecto</span>
              </div>
            </DropdownItem> */}

            <DropdownItem onClick={() => handleWeight("ascendente")}>
              <div className="flex items-center space-x-2 cursor-pointer">
                <img src={flechaArriba} className="w-2" alt="Ascendente" />
                <span>Ascendente</span>
              </div>
            </DropdownItem>

            <DropdownItem onClick={() => handleWeight("descendente")}>
              <div className="flex items-center space-x-2 cursor-pointer">
                <img src={flechaAbajo} className="w-2" alt="Descendente" />
                <span>Descendente</span>
              </div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Sorts;
