const { CasaDeAdopcion } = require("../db");

const postRatings = async (req, res) => {
	try {
		const id = req.params.id;
		const casaDeAdopcion = await CasaDeAdopcion.findOne({
			where: { id },
			raw: true,
		});
		// console.log("sdadasdasdasdasdasd: " + casaDeAdopcion);
		// console.log(casaDeAdopcion);
		// console.log("este es el ID: " + id);
		const rating = req.body.rating;
		const averageRating = (ratings) => {
			if (!ratings || !ratings.length) return 0;
			return ratings.reduce((a, b) => a + b, 0) / ratings.length;
		};
		// console.log('este es el rating: ' + rating)
		if (!casaDeAdopcion)
			return res.status(404).send({ message: "Casa de adopción no existe" });
		if (!rating || rating < 1 || rating > 5) {
			return res
				.status(400)
				.json({ error: "Rating invalido, debe estar entre 1 y 5" });
		}
		// console.log("este es el rating otra vez:" + rating);

		// console.log(casaDeAdopcion.ratings)
		if (casaDeAdopcion.ratings === null) {
			casaDeAdopcion.ratings = [];
		}

		// console.log(casaDeAdopcion.ratings);

		casaDeAdopcion.ratings = [...casaDeAdopcion.ratings, rating];

		// console.log('actualizando RATINGS:',casaDeAdopcion.ratings)

		// console.log("valor de DB", casaDeAdopcion.rating);

		casaDeAdopcion.rating = parseFloat(
			averageRating(casaDeAdopcion.ratings).toFixed(2)
		);
		console.log("valor de DB", casaDeAdopcion.rating);
		// console.log('archivo final',casaDeAdopcion)

		await CasaDeAdopcion.update(
			{ ratings: casaDeAdopcion.ratings, rating: casaDeAdopcion.rating },
			{ where: { id } }
		);
		// console.log("archivo final 22", casaDeAdopcion);
		res.send({ message: "Rating submitted successfully" });
	} catch (error) {
		res.status(500).send({ message: "Error submitting rating" });
	}
};

module.exports = postRatings;
