// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { applyFilters } from "../../redux/actions"; // Asegúrate de que la ruta sea la correcta

// const FilterMascotas = () => {
//   const dispatch = useDispatch();
//   const mascotas = useSelector((state) => state.mascotas);

//   const [filters, setFilters] = useState({
//     edad: "",
//     sexo: "",
//     tamano: "",
//     raza: "",
//     especie: "",
//     peso: "",
//   });
//   const [showDropdown, setShowDropdown] = useState(null);

//   const handleChange = (name, value) => {
//     setFilters({
//       ...filters,
//       [name]: value,
//     });
//   };

//   const handleApplyFilters = () => {
//     dispatch(applyFilters(filters));
//   };

//   const toggleDropdown = (name) => {
//     setShowDropdown(showDropdown === name ? null : name);
//   };

//   const options = {
//     sexo: ["Macho", "Hembra"],
//     tamano: ["Pequeño", "Mediano", "Grande"],
//     // especie: ['Perro', 'Gato'],
//     peso: ["Ligero", "Mediano", "Pesado"],
//     edad: ["Cachorro", "Junior", "Adulto"],
//   };

//   return (
//     <div className="p-4 bg-white shadow-md rounded-md max-w-screen-lg mx-auto">
//       <div className="flex flex-wrap justify-between space-x-2">
//         {Object.keys(options).map((filter) => (
//           <div className="relative" key={filter}>
//             <button
//               onClick={() => toggleDropdown(filter)}
//               className="flex flex-col items-center m-2 bg-gray-100 p-3 rounded-lg shadow-md hover:bg-gray-200 focus:outline-none"
//             >
//               <span className="text-xl text-gray-600">
//                 {filter === showDropdown ? "🔼" : "🔽"}
//               </span>
//               <span className="text-sm text-gray-600 mt-1 capitalize">
//                 {filter}
//               </span>
//             </button>
//             {filter === showDropdown && (
//               <div className="absolute z-10 bg-white border rounded shadow mt-2 w-full">
//                 {options[filter].map((option) => (
//                   <button
//                     onClick={() => handleChange(filter, option)}
//                     className="block w-full text-left p-2 hover:bg-gray-100"
//                     key={option}
//                   >
//                     {option}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//       <div className="mt-4">
//         <button
//           className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded w-full"
//           onClick={handleApplyFilters}
//         >
//           Aplicar Filtros
//         </button>
//       </div>
//     </div>
//   );
// };


// export default FilterMascotas;

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
    )
};

export default FilterMascotas;







