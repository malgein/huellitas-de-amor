const { Mascota } = require("../db");

const getPets = async () => {
  const pets = await Mascota.findAll();
  if (!pets) return { status: 404, message: "No existen mascotas" };
  return pets;
};
module.exports = getPets;
