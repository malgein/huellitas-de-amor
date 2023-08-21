import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyFilters } from "../../redux/actions"; // Asegúrate de que la ruta sea la correcta
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

const FilterMascotas = () => {
  const dispatch = useDispatch();
  const mascotas = useSelector((state) => state.mascotas);

  const initialState = {
    edad: "",
    sexo: "",
    tamano: "",
    raza: "",
    especie: "",
    peso: "",
  };

  const [filters, setFilters] = useState(initialState);

  const handleChange = (name, value) => {
    const newFilters = {
      ...filters,
      [name]: value,
    };
    setFilters(newFilters);
    dispatch(applyFilters(newFilters)); // Aplicar filtros automáticamente
  };

  const handleResetFilters = () => {
    setFilters(initialState); // Resetear a estado inicial
    dispatch(applyFilters(initialState));
  };

  const options = {
    sexo: ["Macho", "Hembra"],
    tamano: ["Pequeño", "Mediano", "Grande"],
    peso: ["Ligero", "Mediano", "Pesado"],
    edad: ["Cachorro", "Junior", "Adulto"],
  };

  return (
    <div className="p-10 bg-white shadow-md rounded-md max-w-screen-lg mx-auto flex flex-wrap space-x-10 justify-between">
      {Object.keys(options).map((filter) => (
        <Dropdown key={filter}>
          <DropdownTrigger>
            <Button 
              variant="bordered" 
              className="capitalize"
            >
              {filters[filter] || filter}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label={`${filter} options`}
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={new Set([filters[filter]])}
            onSelectionChange={(keys) => handleChange(filter, Array.from(keys)[0])}
          >
            {options[filter].map((option) => (
              <DropdownItem key={option}>{option}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      ))}
      <Button 
        className="capitalize ml-2" 
        color="error" // Usamos el color "error" para que destaque como acción de reset
        onClick={handleResetFilters}
      >
        Restablecer Filtros
      </Button>
    </div>
  );
};

export default FilterMascotas;