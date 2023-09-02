const { Usuario } = require("../db.js");

const getUserById = async (id) => {

  try {
    // Buscamos la mascota por su ID en la base de datos
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return ({ mensaje: "Usuario no encontrado" });
    }

    // Guardamos los cambios en la base de datos

    return usuario
  } catch (error) {
    console.error(error);
    return { mensaje: "Error en el servidor" }
  }
}

module.exports = getUserById;