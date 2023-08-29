const { CasaDeAdopcion } = require("../db.js");
// const axios = require("axios");

const getCasaById = async (id) => {
  try {
    let getCasa = await CasaDeAdopcion.findOne({
      where: { id },
    });

    if (!getCasa) {
      return { status: 404, message: "No se encontró esta mascota" };
    }

    return getCasa;
  } catch (error) {
    throw { status: error?.status, message: error?.message };
  }
};

module.exports = getCasaById;