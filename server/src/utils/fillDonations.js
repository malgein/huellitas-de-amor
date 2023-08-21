//Trae la instancia la tabla Mascota en la base de datos
const { Donacion } = require('../db'); 
// Traae todos los datos de mascotas del archivo json
const allDonations = require('./dataDonations'); 


//controlador que funciona en la  ruta de usuarios con el proposito de llenar la base de datos con datos de usuarios validdos
const fillDonations =  async () => {
  try {
	

    // Llena la tabla con los datos de users que al final son los datos de data.js es decir todas los usuarios
    const result = async() => await Donacion.bulkCreate(allDonations);

    return result()
  } catch (error) {
    console.error('Error al llenar los datos:', error);
    throw { error: error?.status, message: error?.message };
  }
}

module.exports = fillDonations;

