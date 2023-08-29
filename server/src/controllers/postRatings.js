const { CasaDeAdopcion } = require("../db");

const postRatings = async (req, res) => {
	try {
		const casaDeAdopcionId = req.params.id;
		const casaDeAdopcion = await CasaDeAdopcion.findById(casaDeAdopcionId);
		const rating = req.body.rating;
		const averageRating = (ratings) => {
			if (!ratings || !ratings.length) return 0;
			return ratings.reduce((a, b) => a + b, 0) / ratings.length;
		};
		console.log(casaDeAdopcion);
		console.log(casaDeAdopcionId);
		if (!casaDeAdopcion)
			return res.status(404).send({ message: "Casa de adopción no existe" });
		if (!rating || rating < 1 || rating > 5) {
			return res
				.status(400)
				.json({ error: "Rating invalido, debe estar entre 1 y 5" });
		}

		casaDeAdopcion.ratings.push(rating);

		casaDeAdopcion.rating = averageRating(CasaDeAdopcion.ratings);
		casaDeAdopcion.rating.toFixed(2);
		await casaDeAdopcion.save();
		res.send({ message: "Rating submitted successfully" });
	} catch (error) {
		res.status(500).send({ message: "Error submitting rating" });
	}
};

module.exports = postRatings;
