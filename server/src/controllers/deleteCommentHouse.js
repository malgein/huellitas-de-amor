const { Comentario } = require("../db.js");

const deleteCommentHouse = async (req, res) => {
	try {
		const { id } = req.body;
		// Buscamos la mascota por su ID en la base de datos
		const comentario = await Comentario.findByPk(id);

		if (!comentario) {
			return res.status(404).json({ mensaje: "Comentario no encontrado" });
		}

		// Eliminamos el comentario de la base de datos
		await comentario.destroy();

		// Respondemos con un mensaje de éxito
		return res
			.status(200)
			.json({ mensaje: "Comentario eliminado exitosamente" });
	} catch (error) {
		console.error(error);
		// Respondemos con un mensaje de error
		return res.status(500).json({ mensaje: "Error en el servidor" });
	}
};

module.exports = deleteCommentHouse;
