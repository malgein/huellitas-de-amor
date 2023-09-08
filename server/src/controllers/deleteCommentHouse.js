const { Comentario } = require("../db.js");

const deletePetById = async (id) => {
	try {
		// Buscamos la mascota por su ID en la base de datos
		const comentario = await Comentario.findByPk(id);

		if (!comentario) {
			return res.status(404).json({ mensaje: "Mascota no encontrada" });
		}

		// Guardamos los cambios en la base de datos
		await comentario.destroy();

		return { mensaje: "Mascota eliminada exitosamente" };
	} catch (error) {
		console.error(error);
		return { mensaje: "Error en el servidor" };
	}
};

module.exports = deletePetById;
