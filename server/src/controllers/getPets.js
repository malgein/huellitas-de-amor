const { Mascota } = require("../db");

const getPets = async () => {
  try {
    const pets = await Mascota.findAll();
    if (!pets) return { status: 404, message: "No existen mascotas" };
    return pets;
  } catch (error) {
    throw error;
  }
};
module.exports = getPets;
