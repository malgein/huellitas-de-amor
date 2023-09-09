//Trae la instancia la tabla Mascota en la base de datos
const { Mascota } = require("../db");
// Traae todos los datos de mascotas del archivo json
const allPets = require("./dataPets");

const fillPets = async () => {
	// console.log(res)
	const DB = await Mascota.count();
	
	if (!DB) {
		console.log("Creando BD");
		try {
			console.log(allPets);
			await Mascota.bulkCreate(allPets);
			
			// console.log(res)
			// res.status(200).json({ message: 'Datos de mascotas llenados exitosamente' });
			// res
			// 	? res
			// 			.status(200)
			// 			.json({ message: "Datos de mascotas llenados exitosamente" })
			// 	: console.log('el objeto es undefined');
			console.log("DB CREADA");
		} catch (error) {
			console.error("Error al llenar los datos:", error);
			// res.status(500).json({ error: 'Error al llenar los datos de mascotas' });
		}
	}
};

module.exports = fillPets;
