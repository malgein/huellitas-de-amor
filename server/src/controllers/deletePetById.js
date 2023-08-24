const { Mascota } = require("../db.js");

const deletePetById = async (id) => {

  try {
    // Buscamos la mascota por su ID en la base de datos
    const mascota = await Mascota.findByPk(id);

    if (!mascota) {
      return res.status(404).json({ mensaje: "Mascota no encontrada" });
    }

    // Guardamos los cambios en la base de datos
    await mascota.destroy();

    return { mensaje: "Mascota eliminada exitosamente" }
  } catch (error) {
    console.error(error);
    return { mensaje: "Error en el servidor" }
  }
}

module.exports = deletePetById;