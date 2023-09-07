//ESTO FUE CREADO PARA PUEBA °-°

const { Usuario, Adopcion } = require("../db"); // Importa tu modelo de Adopcion de Sequelize

// Supongamos que tienes los datos de la adopción que deseas crear
const datosAdopcion = {
  // Completa aquí los datos de la adopción, por ejemplo:
  // mascotaId: 1, // ID de la mascota adoptada
  fechaAdopcion: new Date(), // Fecha de adopción
  // ... otras propiedades de la adopción ...
};

// Define una función asíncrona y ejecuta el código dentro de ella
const crearAdopcion = async () => {
  try {
    // Primero, crea la adopción
    const nuevaAdopcion = await Adopcion.create({
      fechaAdopcion: new Date(), // Otras propiedades de la adopción
    });

    // Luego, asocia la adopción al usuario especificando el ID del usuario
    const usuario = await Usuario.findByPk(1);
    await nuevaAdopcion.setUsuario(usuario); // Donde 1 es el ID del usuario al que deseas asociar la adopción

    // Paso 3: Guardar la adopción en la base de datos
    await nuevaAdopcion.save();

    console.log("Adopción creada y asociada al usuario con éxito.");
  } catch (error) {
    console.error("Error al crear o asociar la adopción:", error);
  }

  // try {
  //   const nuevaAdopcion = await Adopcion.create(datosAdopcion);
  //   console.log("Adopción creada con éxito:", nuevaAdopcion);
  // } catch (error) {
  //   console.error("Error al crear la adopción:", error);
  // }
};

module.exports = crearAdopcion;

// // Llama a la función para ejecutar el código
// crearAdopcion();
