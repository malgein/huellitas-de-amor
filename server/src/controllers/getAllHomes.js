const { CasaDeAdopcion} = require("../db");

//Ruta para obtener todos los usuarios, necesario para listarlos todos y renderizarlos en el administrador admin
const getAllHomes = async () => {
	//trae todos los usuarios de la base de datos y los guarda en users en forma de json para luego retornarlos
	try {
		const homes = await CasaDeAdopcion.findAll();

		if (!homes) return { status: 404, message: "No existen casas de adopcion" };
		return homes;
	} catch (error) {
		return error;
	}
};

module.exports = getAllHomes;


// const { CasaDeAdopcion, Mascota } = require("../db");

// //Ruta para obtener todos los usuarios, necesario para listarlos todos y renderizarlos en el administrador admin
// const getAllHomes = async () => {
// 	//trae todos los usuarios de la base de datos y los guarda en users en forma de json para luego retornarlos
// 	try {
// 		const homes = await CasaDeAdopcion.findAll({
// 			include: [
// 				{
// 					model: Mascota,
// 				},
// 			],
// 		});

// 		if (!homes) return { status: 404, message: "No existen casas de adopcion" };
// 		return homes;
// 	} catch (error) {
// 		return error;
// 	}
// };

// module.exports = getAllHomes;

