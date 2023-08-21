const { CasaDeAdopcion } = require("../db.js");

const deleteHouseAdoptionById = async (id) => {

  try {
    // Buscamos la mascota por su ID en la base de datos
    const casaDeAdopcion = await CasaDeAdopcion.findByPk(id);

    if (!casaDeAdopcion) {
      return res.status(404).json({ mensaje: "casa de adopcion no encontrada" });
    }

    // Guardamos los cambios en la base de datos
    await casaDeAdopcion.destroy();

    return { mensaje: "Casa de adopcion eliminada exitosamente" }
  } catch (error) {
    console.error(error);
    return { mensaje: "Error en el servidor" }
  }
}

module.exports = deleteHouseAdoptionById;