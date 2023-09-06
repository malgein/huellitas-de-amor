//Trae la instancia la tabla Mascota en la base de datos
const { Mascota } = require('../db'); 
// Traae todos los datos de mascotas del archivo json
const allPets = require('./dataPets'); 

const fillPets = async (req, res) => {
    try {

      await Mascota.bulkCreate(allPets);
      console.log(allPets)
// console.log(res)
      if(Mascota) {
        res.status(200).json({ message: 'Datos de mascotas llenados exitosamente'});
      } else {
        res.status(400).json({Error: 'No existe el modelo mascota en la base de datos'})
      } 
    } catch (error) {
      console.error('Error al llenar los datos:', error);
      res.status(500).json({ error: 'Error al llenar los datos de mascotas'});
  //  }
  }
}


module.exports = fillPets;

