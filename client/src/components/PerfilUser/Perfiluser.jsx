import React from "react";
import styles from "./perfil.module.css";

const Perfil = () => {
  return (
    <div className={styles.profile_container}>
      <h1>Mi Perfil</h1>
      <div className="profile-info">
        <img
          src="../../assets/LogoPrueba.png"
          alt="Foto de perfil"
          className="profile-picture"
        />
        <div className={styles.user_details}>
          <h2>Nombre de Usuario</h2>
          <p>Correo electrónico: usuario@example.com</p>
          <p>Ubicación: Ciudad, País</p>
          {/* Otros detalles del perfil */}
        </div>
      </div>
      <div className={styles.profile_buttons}>
        <button className="edit-button">Editar Perfil</button>
        <button className="logout-button">Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default Perfil;
