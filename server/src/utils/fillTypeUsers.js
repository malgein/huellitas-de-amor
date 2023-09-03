//Trae la instancia la tabla Mascota en la base de datos
const { TipoDeUsuario } = require('../db'); 
// Traae todos los datos de mascotas del archivo json

    const typeUsers = [
			{id: 1, tipo: "Administrador"},
			{id: 2, tipo: "Centro De Adopcion"},
			{id: 3, tipo: "Usuario"},
      {id: 4, tipo: "Super Administrador"}
		]

const fillTypeUsers = async (req, res) => {
    try {

      await TipoDeUsuario.bulkCreate(typeUsers);

// console.log(res)
      if(TipoDeUsuario) {
        res.status(200).json({respuesta: 'Tipos de usuarios establecidos correctamente'});
      } else {
        res.status(400).json({Error: 'No existe el modelo TipoDeUsuario en la base de datos'})
      } 
    } catch (error) {
      console.error('Error al llenar los datos:', error);
      res.status(500).json({ error: 'Error al llenar los datos de tipo de usuario' });
  //  }
  }
}


module.exports = fillTypeUsers;

