const { Usuario } = require("../db.js");

const modUserById = async (id, updatedData) => {

  try {
    // Buscamos la mascota por su ID en la base de datos
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    // Actualizamos las propiedades con los nuevos datos
    Object.keys(updatedData).forEach(key => {
      usuario[key] = updatedData[key];
    });

    // Guardamos los cambios en la base de datos
    await usuario.save();

    return { mensaje: "Propiedades modificadas exitosamente" }
  } catch (error) {
    console.error(error);
    return { mensaje: "Error en el servidor" }
  }
}

module.exports = modUserById;
