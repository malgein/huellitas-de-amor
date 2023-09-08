//Trae la instancia la tabla Mascota en la base de datos
const { Donacion } = require('../db'); 
// Traae todos los datos de mascotas del archivo json
const allDonations = require('../utils/dataDonations'); 

const fillDonations = async (req, res) => {
  const DB = await Donacion.count();
  if (!DB) {
    try {
      await Donacion.bulkCreate(allDonations);
      // if (Donacion) {
        // res.status(200).json({ message: 'Datos de mascotas llenados exitosamente' });
      // }
    } catch (error) {
      console.error('Error al llenar los datos:', error);
       throw { error: error?.status, message: error?.message };
    }
  }
}

module.exports = fillDonations;

