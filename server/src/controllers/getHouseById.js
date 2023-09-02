const { CasaDeAdopcion } = require("../db.js");

const getHouseById = async (id) => {

  try {
    // Buscamos la mascota por su ID en la base de datos
    const casa = await CasaDeAdopcion.findByPk(id);

    if (!casa) {
      return ({ mensaje: "Casa de adopcion no encontrada" });
    }

    // Guardamos los cambios en la base de datos

    return casa
  } catch (error) {
    console.error(error);
    return { mensaje: "Error en el servidor" }
  }
}

module.exports = getHouseById;