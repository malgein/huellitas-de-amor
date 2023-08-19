//Trae la instancia la tabla Mascota en la base de datos
const { Usuario } = require('../db'); 
// Traae todos los datos de mascotas del archivo json
const allUsers = require('../dataUsers'); 

const fillUsers =  async (req, res) => {
  try {
		//Esta linea de codigo borra la tabla para asegurarse que no se vuelva a rescribir la informacion que le estamos a punto de pasar
    // await Usuario.sync({ force: true }); // Esto elimina y recrea la tabla para llenar los datos

    // Llena la tabla con los datos de users que al final son los datos de data.js es decir todas los usuarios
    await Usuario.bulkCreate(allUsers);

    res.status(200).json({ message: 'Datos de usuarios llenados exitosamente' });
  } catch (error) {
    console.error('Error al llenar los datos:', error);
    res.status(500).json({ error: 'Error al llenar los datos de los usuarios' });
  }
}

module.exports = fillUsers;

