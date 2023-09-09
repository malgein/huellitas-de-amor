const {Usuario, TipoDeUsuario, Donacion} = require('../db')
// Sincroniza los modelos con la base de datos (esto crea las tablas si no existen)
// sequelize.sync({ force: false }) // Si "force" es true, eliminará las tablas existentes y las recreará
  
const findTypeUsers = async() => {
	
	try {
    // Busca el usuario por ID junto con su TipoDeUsuario asociado
    const usuarios = await Usuario.findAll({
      include: [
        {
          model: TipoDeUsuario,
           // Alias opcional para TipoDeUsuario
        },
        {
          model: Donacion,
         // Alias opcional para Donaciones
        },
      ],
    });

    return usuarios;
  } catch (error) {
    console.error('Error al obtener el usuario con TipoDeUsuario:', error);
    return { error: `Error interno del servidor. ${error.message}` };
  }
}

module.exports = findTypeUsers


// const {Usuario, TipoDeUsuario} = require('../db')
// // Sincroniza los modelos con la base de datos (esto crea las tablas si no existen)
// // sequelize.sync({ force: false }) // Si "force" es true, eliminará las tablas existentes y las recreará
  
// const findTypeUsers = async(req, res) => {
	
// 	try {
//     // Busca el usuario por ID junto con su TipoDeUsuario asociado
//     const usuarios = await Usuario.findAll({
//       include: TipoDeUsuario,
//     });

//     if (!usuarios) {
//       return res.status(400).json({ error: 'Usuarios no encontrado.' })
//     }

//     return res.status(200).json(usuarios);
//   } catch (error) {
//     console.error('Error al obtener el usuario con TipoDeUsuario:', error);
//     return res.status(500).json({ error: `Error interno del servidor. ${error.message}` })
//   }
// }

// module.exports = findTypeUsers

