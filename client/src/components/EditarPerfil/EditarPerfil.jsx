import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const EditarPerfil = () => {
  const { userId } = useParams();
  console.log("userId:", userId);

  const [userData, setUserData] = useState({
    id: userId,
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    nacionalidad: "",
    ubicacion: "",
    direccion: "",
    telefono: "",
    acerca: "",
  });

  useEffect(() => {
    // Cargar los datos del usuario desde el backend cuando el componente se monta
    axios.get(`http://localhost:3001/perfil/${userId}`).then((response) => {
      setUserData(response.data);
    });
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar los datos actualizados al backend
    axios
      .put(`http://localhost:3001/usuario/${userId}`, userData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="border border-black flex flex-col items-center h-[300px]">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={userData.nombre}
          onChange={handleInputChange}
          className="flex flex-col"
        />

        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          value={userData.apellido}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />

        <label htmlFor="nacionalidad">Nacionalidad:</label>
        <input
          type="text"
          id="nacionalidad"
          name="nacionalidad"
          value={userData.nacionalidad}
          onChange={handleInputChange}
        />

        <label htmlFor="ubicacion">Ubicación:</label>
        <input
          type="text"
          id="ubicacion"
          name="ubicacion"
          value={userData.ubicacion}
          onChange={handleInputChange}
        />

        <label htmlFor="direccion">Dirección:</label>
        <input
          type="text"
          id="direccion"
          name="direccion"
          value={userData.direccion}
          onChange={handleInputChange}
        />

        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="text"
          id="telefono"
          name="telefono"
          value={userData.telefono}
          onChange={handleInputChange}
        />

        <label htmlFor="acerca">Acerca de mí:</label>
        <textarea
          id="acerca"
          name="acerca"
          value={userData.acerca}
          onChange={handleInputChange}
        ></textarea>

        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EditarPerfil;
