// import React from "react";
// import styles from "./perfil.module.css";

// const Perfil = () => {
//   return (
//     <div className={styles.profile_container}>
//       <h1>Mi Perfil</h1>
//       <div className="profile-info">
//         <img
//           src="../../assets/LogoPrueba.png"
//           alt="Foto de perfil"
//           className="profile-picture"
//         />
//         <div className={styles.user_details}>
//           <h2>Nombre de Usuario</h2>
//           <p>Correo electrónico: usuario@example.com</p>
//           <p>Ubicación: Ciudad, País</p>
//           {/* Otros detalles del perfil */}
//         </div>
//       </div>
//       <div className={styles.profile_buttons}>
//         <button className="edit-button">Editar Perfil</button>
//         <button className="logout-button">Cerrar Sesión</button>
//       </div>
//     </div>
//   );
// };

// export default Perfil;

// import React from "react";
// import styles from "./Perfil.module.css";
// import LogoPrueba from "../../assets/LogoPrueba.jpg";

// const Perfil = () => {
//   return (
//     <div className={styles.profileContainer}>
//       <div className={styles.profileHeader}>
//         <img
//           src={LogoPrueba}
//           alt="Foto de perfil"
//           className={styles.profilePicture}
//         />
//         <h1 className={styles.profileName}>Juan Pérez</h1>
//         <p className={styles.profileLocation}>Buenos Aires, Argentina</p>
//       </div>
//       <div className={styles.profileDetails}>
//         <h2>Mi Historia</h2>
//         <p>
//           ¡Hola! Soy Juan, un amante de los animales. Adopté a mi compañero
//           peludo hace 3 años y nuestra vida juntos ha sido increíble. Me encanta
//           pasear, jugar y disfrutar de momentos especiales con él. Estamos
//           buscando una nueva amiga peluda para unirse a nuestra familia.
//           ¡Siempre estoy emocionado por conocer nuevas mascotas y darles un
//           hogar lleno de amor!
//         </p>
//       </div>
//       <div className={styles.profileButtons}>
//         <button className={styles.editButton}>Editar Perfil</button>
//         <button className={styles.logoutButton}>Cerrar Sesión</button>
//       </div>
//     </div>
//   );
// };

// export default Perfil;

import React from "react";
import styles from "./perfil.module.css";
import fotoPerfil from "../../assets/fotoPerfil.jpg";

const Perfil = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <img
          src={fotoPerfil}
          alt="Foto de perfil"
          className={styles.profilePicture}
        />
        <div className={styles.profileInfo}>
          <h1 className={styles.profileName}>Juan Pérez</h1>
          <p className={styles.profileLocation}>Buenos Aires, Argentina</p>
          
        </div>
      </div>
      <div className={styles.profileDetails}>
        <h2>Acerca de Mí</h2>
        <p>
          ¡Hola! Soy Juan, un amante de los animales. Adopté a mi compañero
          peludo hace 3 años y nuestra vida juntos ha sido increíble. Me encanta
          pasear, jugar y disfrutar de momentos especiales con él. Estamos
          buscando una nueva amiga peluda para unirse a nuestra familia.
          ¡Siempre estoy emocionado por conocer nuevas mascotas y darles un
          hogar lleno de amor!
        </p>
      </div>
      <div className={styles.profileContact}>
        <h2>Contacto</h2>
        <p>Correo electrónico: juan.perez@example.com</p>
        <p>Teléfono: (123) 456-7890</p>
        <p>Redes sociales: @juanperez</p>
      </div>
      <div className={styles.profileButtons}>
        <button className={styles.editButton}>Editar Perfil</button>
      </div>
    </div>
  );
};

export default Perfil;
