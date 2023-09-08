// const { Usuario, TipoDeUsuario, Donacion } = require("../db");

// //Ruta para obtener todos los usuarios, necesario para listarlos todos y renderizarlos en el administrador admin
// const getUsers = async (res,req) => {
// 	//trae todos los usuarios de la base de datos y los guarda en users en forma de json para luego retornarlos
// 	try {
// 		const users = await Usuario.findAll({
// 			include: [
// 				{
// 					model: TipoDeUsuario,
// 					// Alias opcional para TipoDeUsuario
// 				},
// 				{
// 					model: Donacion,
// 					// Alias opcional para Donaciones
// 				},
// 			],
// 		});

// 		if (!users) return res.json({ status: 404, message: "No existen usuarios" });
// 		return res.json(users);
// 	} catch (error) {
// 		console.error("Error al OBTENER los datos:", error);
// 		throw { error: error?.status, message: error?.message };
// 	}
// };

// module.exports = getUsers;

const { Usuario, TipoDeUsuario, Donacion } = require("../db");



const getUsers = async () => {
	try {
		const users = await Usuario.findAll({
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
		console.log(users);
		return users;
	} catch (error) {
		console.error("Error al obtener las mascotas:", error);
		throw new Error("Error al obtener las mascotas.");
	}
};

// Ruta para obtener todos los usuarios, necesario para listarlos todos y renderizarlos en el administrador admin
// const getUsers = async (req, res) => {
// 	const DB = await Usuario.count()
// 	console.log(DB)
// 	try {
// 		const users = await Usuario.findAll({
// 			include: [
// 				{
// 					model: TipoDeUsuario,
// 					// Alias opcional para TipoDeUsuario
// 				},
// 				{
// 					model: Donacion,
// 					// Alias opcional para Donaciones
// 				},
// 			],
// 		}
// 		);

// 		if (!users || users.length === 0) {
// 			// Check if no users were found
// 			throw { error: error?.status, message: error?.message };
// 		}

// 		// Return the users as JSON
// 		return res.json(users);
// 	} catch (error) {
// 		console.error("Error al OBTENER los datos:", error);
// 		// Handle the error response here
// 		throw { error: error?.status, message: error?.message };
// 	}
// };

module.exports = getUsers;

