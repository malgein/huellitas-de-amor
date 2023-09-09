const { CasaDeAdopcion, Usuario, Comentario } = require("../db.js");


const getComentarios = async (req, res) => {
	const { id } = req.params;
	try {
		const comentarios = await Comentario.findAll({
			where: {
				casaDeAdopcionId: id,
			},
			include: [
				{
					model: Usuario,
					
				},
			],
		});
		return res.status(200).json(comentarios);
    } catch (error) {
        console.log(error)
        throw { status: error?.status, message: error?.message };
    }
};

module.exports = getComentarios;
