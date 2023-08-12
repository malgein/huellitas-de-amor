const { Mascota } = require("../db");

const getPetsByName = async (nombre) => {
  try {
    const petName = await Mascota.findAll({ where: { nombre } });
    if (!nombre) return { status: 404, message: "No existe la mascota" };
    return petName;
  } catch (error) {
    throw { stats: error?.status, message: error?.message };
  }
};

module.exports = getPetsByName;
