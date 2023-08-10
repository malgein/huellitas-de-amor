//Importar modelos
const { Mascotas } = require("../db.js");
const axios = requrire("axios");

const getPetById = async (id) => {
  let getPet = await Mascotas.findOne({
    where: { id },
  });

  if (!getPet) {
    return { status: 404, message: "No se encontró esta mascota" };
  }

  return videogame;
};
