const { Mascota } = require("../db");
const { Op } = require("sequelize");

const getPetsByName = async (nombre) => {
  try {
    let nombreMinuscula = nombre.toUpperCase();
    if (nombreMinuscula) {
       const petName = await Mascota.findOne({
        where: { nombre: { [Op.iLike]: `%${nombre}%` } },
      });
      return petName;
    } else {
      const mascotas = await Mascota.findAll();
      return mascotas;
    }
  } catch (error) {
    throw { status: error?.status, message: error?.message };
  }
};

module.exports = getPetsByName;
