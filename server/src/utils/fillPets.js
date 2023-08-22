//Trae la instancia la tabla Mascota en la base de datos
const { Mascota } = require('../db'); 
// Traae todos los datos de mascotas del archivo json
const allPets = require('./data'); 

const fillPets = async () => {
// console.log(res)
  const DB = await Mascota.count();
  if (!DB) {
    console.log('Creando BD')
    try {
  // console.log(res)
      //Esta linea de codigo borra la tabla para asegurarse que no se vuelva a rescribir la informacion que le estamos a punto de pasar
      // await Mascota.sync({ force: true }); // Esto elimina y recrea la tabla para llenar los datos

      // Llena la tabla con los datos de allPets que al final son los datos de data.js es decir todas las mascotas
      await Mascota.bulkCreate(allPets);
      console.log(allPets)
// console.log(res)
      // res.status(200).json({ message: 'Datos de mascotas llenados exitosamente' });
      // res
			// 	? res
			// 			.status(200)
			// 			.json({ message: "Datos de mascotas llenados exitosamente" })
      // 	: console.log('el objeto es undefined');
      console.log('DB CREADA')
      
    } catch (error) {
      console.error('Error al llenar los datos:', error);
      // res.status(500).json({ error: 'Error al llenar los datos de mascotas' });
    }
  }
}


module.exports = fillPets;

