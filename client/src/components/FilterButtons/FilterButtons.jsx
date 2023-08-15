import React, { useState } from 'react';
import axios from 'axios';

const FilterMascotas = () => {
  const [filters, setFilters] = useState({
    edad: '',
    sexo: '',
    tamano: '',
    raza: '',
    especie: '',
    peso: '',
  });
  const [mascotas, setMascotas] = useState([]);
  const [showDropdown, setShowDropdown] = useState(null);

  const handleChange = (name, value) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const applyFilters = () => {
    axios
      .get('/mascotas', { params: filters })
      .then((response) => {
        setMascotas(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const toggleDropdown = (name) => {
    setShowDropdown(showDropdown === name ? null : name);
  };

  const options = {
    sexo: ['Macho', 'Hembra'],
    tamano: ['Chico', 'Mediano', 'Grande'],
    especie: ['Perro', 'Gato'],
    peso: ['Ligero', 'Mediano', 'Pesado'],
  };
//ver los diseños de los filtros
  return (
    <div className="p-4 bg-white shadow-md rounded-md max-w-screen-lg mx-auto">
      <div className="flex flex-wrap justify-between space-x-2">
        {Object.keys(options).map((filter) => (
          <div className="relative">
            <button onClick={() => toggleDropdown(filter)} className="flex flex-col items-center m-2 bg-gray-100 p-3 rounded-lg shadow-md hover:bg-gray-200 focus:outline-none">
              <span className="text-xl text-gray-600">{filter === showDropdown ? '🔼' : '🔽'}</span>
              <span className="text-sm text-gray-600 mt-1 capitalize">{filter}</span>
            </button>
            {filter === showDropdown && (
              <div className="absolute z-10 bg-white border rounded shadow mt-2 w-full">
                {options[filter].map((option) => (
                  <button onClick={() => handleChange(filter, option)} className="block w-full text-left p-2 hover:bg-gray-100">
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded w-full" onClick={applyFilters}>
          Aplicar Filtros
        </button>
        {/* Aquí renderizar las mascotas filtradas */}
        {mascotas.map((mascota) => (
          <div key={mascota.id} className="border p-2 mb-2 rounded shadow-sm">
            <h3 className="text-lg font-semibold">{mascota.nombre}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterMascotas;



