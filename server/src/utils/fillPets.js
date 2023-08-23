//Trae la instancia la tabla Mascota en la base de datos
const { Mascota } = require('../db'); 
// Traae todos los datos de mascotas del archivo json
const allPets = require('./data'); 

const fillPets = async (req, res) => {

  const DB = await Mascota.count();
  if (!DB) {
    console.log('Creando BD')
    try {
  
      await Mascota.bulkCreate(allPets);

      res.status(200).json({ message: 'Datos de mascotas llenados exitosamente' });
    } catch (error) {
      console.error('Error al llenar los datos:', error);
      res.status(500).json({ error: 'Error al llenar los datos de mascotas' });
    }
  }
}


module.exports = fillPets;

