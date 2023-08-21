const { CasaDeAdopcion } = require("../db.js");

const modHouseById = async (id, updatedData) => {

  try {
    // Buscamos la mascota por su ID en la base de datos
    const casaDeAdopcion = await CasaDeAdopcion.findByPk(id);

    if (!casaDeAdopcion) {
      return res.status(404).json({ mensaje: "Casa de adopcion no encontrada" });
    }

    // Actualizamos las propiedades con los nuevos datos
    Object.keys(updatedData).forEach(key => {
      casaDeAdopcion[key] = updatedData[key];
    });

    // Guardamos los cambios en la base de datos
    await casaDeAdopcion.save();

    return { mensaje: "Propiedades modificadas exitosamente" }
  } catch (error) {
    console.error(error);
    return { mensaje: "Error en el servidor" }
  }
}

module.exports = modHouseById;
