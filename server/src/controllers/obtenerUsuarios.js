const { Usuario, TipoDeUsuario, Donacion } = require("../db");

// const usuarios = async (req,res) => {
// 	try {
//         const allUsers = await Usuario.findAll(
//         //     {
// 		// 	include: [
// 		// 		{
// 		// 			model: TipoDeUsuario,
// 		// 			// Alias opcional para TipoDeUsuario
// 		// 		},
// 		// 		{
// 		// 			model: Donacion,
// 		// 			// Alias opcional para Donaciones
// 		// 		},
// 		// 		{ model: Comentario },
// 		// 		{ model: Adopcion },
//         //         { model: favorito },
                
// 		// 	],
//         // }
//         );
// 		console.log(allUsers);
// 		return allUsers;
// 	} catch (error) {
// 		console.error("Error al obtener las mascotas:", error);
// 		throw new Error("Error al obtener las mascotas.");
// 	}
// };

// module.export = usuarios;




// Controlador para obtener todos los usuarios de la base de datos
const getAllUsers = async (req, res) => {
	try {
		// Utiliza el método findAll de Sequelize para obtener todos los registros de la tabla "usuarios"
		const users = await Usuario.findAll();

		// Verifica si se encontraron usuarios
		if (!users || users.length === 0) {
			return res.status(404).json({ message: "No existen usuarios" });
		}

		// Devuelve los usuarios como respuesta en formato JSON
		return res.json(users);
	} catch (error) {
		console.error("Error al obtener los datos de usuarios:", error);
		 throw { status: error?.status, message: error?.message };
	}
};

module.exports = getAllUsers;

