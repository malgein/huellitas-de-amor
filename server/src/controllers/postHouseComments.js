const { v4: uuidv4 } = require("uuid");
const { Comentario, Usuario, CasaDeAdopcion } = require("../db");

const postHouseComments = async (req, res) => {
	try {
		const { id } = req.params;
		const casaDeAdopcion = await CasaDeAdopcion.findAll({
			where: { id },
			raw: true,
		});
		console.log("                                  ", id);
		const { comment, userId } = req.body;
		console.log(comment)
		console.log(userId)
		if (!casaDeAdopcion)
			return res.status(404).send({ message: "Casa de adopción no existe" });
		if (!comment || !userId) {
			return res.status(400).json({
				error: "Comentario o ID de usuario inválido, no debe estar vacío",
			});
		}

		const currentDate = new Date();
		console.log('id de Casa de ADOPCIONAAAAA          ' , casaDeAdopcion.id)
		console.log(comment)
		const createdComment = await Comentario.create({
			texto: comment,
			usuarioId: userId,
			casaDeAdopcionId: id,
			fecha: currentDate,
			id: uuidv4()
		});
		res.status(200).json(createdComment);
	} catch (error) {
		console.error(error);
		res.status(500).send({ message: "Error añadiendo el comentario" });
	}
};

module.exports = postHouseComments;

// const { CasaDeAdopcion } = require("../db");

// const postHouseComments = async (req, res) => {
// 	try {
// 		const id = req.params.id;
// 		const casaDeAdopcion = await CasaDeAdopcion.findOne({
// 			where: { id },
// 			raw: true,
// 		});

// 		const {comment} = req.body;
// 	console.log(comment)
// 		if (!casaDeAdopcion)
// 			return res.status(404).send({ message: "Casa de adopción no existe" });
// 		if (!comment ) {
// 			return res
// 				.status(400)
// 				.json({ error: "Comentario invalido, no debe estar vacio" });
// 		}

// 		if (casaDeAdopcion.comments === null) {
// 			casaDeAdopcion.comments = [];
// 		}

// 		// console.log(casaDeAdopcion.ratings);

// 		casaDeAdopcion.comments = [...casaDeAdopcion.comments, comment];

// 		await CasaDeAdopcion.update(
// 			{ comments: casaDeAdopcion.comments},
// 			{ where: { id } }
// 		);

// 		res.send({ message: "Comentario añadido satisfactoriamente" });
// 	} catch (error) {
// 		res.status(500).send({ message: "Error añadiendo el comentario" });
// 	}
// };

// module.exports = postHouseComments;
