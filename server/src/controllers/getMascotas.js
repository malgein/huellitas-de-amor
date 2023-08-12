const { Mascota } = require("../db")



const getMascotas = async (req, res) => {
  try {
    const dbMascotas = await Mascota.findAll()
    res.json(dbMascotas);

  } catch (error) {
    throw new Error('Error al obtener los perros');
  }
};

module.exports = getMascotas;

