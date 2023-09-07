//Importar modelos
const { CasaDeAdopcion} = require("../db.js");
// const axios = require("axios");

const getHomeById = async (req, res) => {
    const { id } = req.params;
    
	try {
		const casaDeAdopcion = await CasaDeAdopcion.findOne({
			where: { id },
		});
console.log(casaDeAdopcion)
		if (!casaDeAdopcion) {
			return res.status(404).json({message: "No se encontró esta casa de adopcion" });
		}

		return res.status(200).json(casaDeAdopcion);;
	} catch (error) {
		console.log(error)
		throw { status: error?.status, message: error?.message };
	}
	
};

module.exports = getHomeById;
