const { Usuario } = require("../db.js");

const deleteUserById = async (id) => {

  try {
    // Buscamos la mascota por su ID en la base de datos
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return ({ mensaje: "Mascota no encontrada" });
    }

    // Guardamos los cambios en la base de datos
    await usuario.destroy();

    return { mensaje: "Usuario  eliminado exitosamente" }
  } catch (error) {
    console.error(error);
    return { mensaje: "Error en el servidor" }
  }
}

module.exports = deleteUserById;