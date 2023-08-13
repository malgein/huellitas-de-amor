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

  const handleChange = (e) => {
    const { name, value } = e.target;
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

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
        <select name="sexo" className="bg-white border border-gray-300 rounded p-2" onChange={handleChange}>
          <option value="">Sexo</option>
          <option value="Macho">Macho</option>
          <option value="Hembra">Hembra</option>
        </select>
        <select name="tamano" className="bg-white border border-gray-300 rounded p-2" onChange={handleChange}>
          <option value="">Tamaño</option>
          <option value="Pequeño">Pequeño</option>
          <option value="Mediano">Mediano</option>
          <option value="Grande">Grande</option>
        </select>
        <select name="raza" className="bg-white border border-gray-300 rounded p-2" onChange={handleChange}>
          <option value="">Raza</option>
          {/* Agregar las opciones de raza aquí */}
        </select>
        <select name="especie" className="bg-white border border-gray-300 rounded p-2" onChange={handleChange}>
          <option value="">Especie</option>
          <option value="Perro">Perro</option>
          <option value="Gato">Gato</option>
          {/* Agregar más opciones de especie aquí */}
        </select>
        <select name="peso" className="bg-white border border-gray-300 rounded p-2" onChange={handleChange}>
          <option value="">Peso</option>
          <option value="Ligero">Ligero</option>
          <option value="Mediano">Mediano</option>
          <option value="Pesado">Pesado</option>
        </select>
        <button className="bg-blue-500 text-white p-2 rounded" onClick={applyFilters}>
          Aplicar Filtros
        </button>
      </div>
      <div className="mt-4">
        {/* Aquí renderizar las mascotas filtradas */}
        {mascotas.map((mascota) => (
          <div key={mascota.id} className="border p-2 mb-2">
            <h3>{mascota.nombre}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterMascotas;

