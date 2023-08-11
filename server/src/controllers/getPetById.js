//Importar modelos
const { Mascota } = require("../db.js");
// const axios = require("axios");

const getPetById = async (id) => {
  try {
    let getPet = await Mascota.findOne({
      where: { id },
    });

    if (!getPet) {
      return { status: 404, message: "No se encontró esta mascota" };
    }

    return getPet;
  } catch (error) {
    throw { status: error?.status, message: error?.message };
  }
};

module.exports = getPetById;
