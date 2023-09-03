// //Trae la instancia la tabla Mascota en la base de datos
// const { Donacion } = require('../db'); 
// // Traae todos los datos de mascotas del archivo json
// const allDonations = require('./dataDonations'); 


// //controlador que funciona en la  ruta de usuarios con el proposito de llenar la base de datos con datos de usuarios validdos
// const fillDonations =  async () => {
//   try {
	

//     // Llena la tabla con los datos de users que al final son los datos de data.js es decir todas los usuarios
//     const result = async() => await Donacion.bulkCreate(allDonations);

//     return result()
//   } catch (error) {
//     console.error('Error al llenar los datos:', error);
//     throw { error: error?.status, message: error?.message };
//   }
// }

// module.exports = fillDonations;

//Trae la instancia la tabla Mascota en la base de datos
const { Donacion } = require('../db'); 
// Traae todos los datos de mascotas del archivo json
const allDonations = require('./dataDonations'); 


const moreDonations = [{
  "id": 21,
  "fechaDonacion": "2/1/2023",
  "monto": 110,
  "estadoDonacion": 'pendiente'
}, {
  "id": 22,
  "fechaDonacion": "4/12/2021",
  "monto": 230,
  "estadoDonacion": 'aprobado'
}]

//controlador que funciona en la  ruta de usuarios con el proposito de llenar la base de datos con datos de usuarios validdos
const fillDonations =  async (req, res) => {
  try {
	

    // Llena la tabla con los datos de users que al final son los datos de data.js es decir todas los usuarios
   await Donacion.bulkCreate(allDonations);

   if(Donacion) {
      res.status(200).json({ message: 'Datos de donaciones llenados exitosamente' });
    } else {
      res.status(400).json({Error: 'No existe el modelo donacion en la base de datos'})
    } 
  } catch (error) {
    console.error('Error al llenar los datos:', error);
    throw { error: error?.status, message: error?.message };
  }
}

module.exports = fillDonations;

