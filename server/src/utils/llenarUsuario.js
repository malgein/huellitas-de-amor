//Trae la instancia la tabla Mascota en la base de datos
const { Usuario } = require('../db'); 
// Traae todos los datos de mascotas del archivo json
const allUsers = require('./dataUsers'); 


//controlador que funciona en la  ruta de usuarios con el proposito de llenar la base de datos con datos de usuarios validdos
const llenarUsuario = async () => {
  const DB = await Usuario.count();
  if (!DB) {
    try {
	

      // Llena la tabla con los datos de users que al final son los datos de data.js es decir todas los usuarios
      const result = async () => await Usuario.bulkCreate(allUsers);

      return result()
    } catch (error) {
      console.error('Error al llenar los datos:', error);
      // throw { error: error?.status, message: error?.message };
    }
  }
}

module.exports = llenarUsuario;

