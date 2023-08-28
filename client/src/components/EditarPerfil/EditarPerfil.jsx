import React, { useState } from "react";


const EditarPerfil = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    nacionalidad: "",
    AcercaDe: ""
    // ...otros campos
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos actualizados al servidor o almacenarlos localmente.
    console.log("Datos actualizados:", datos);
    // Cierra el formulario de edición después de guardar.
    // Puedes usar un estado para controlar si se muestra o no.
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={datos.nombre}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          value={datos.apellido}
          onChange={handleChange}
        />
      </div>
      {/* Repite este patrón para otros campos */}
      <button type="submit">Guardar Cambios</button>
    </form>
  );
};

export default EditarPerfil;
