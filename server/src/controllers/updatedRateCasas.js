const { Rating, CasaDeAdopcion } = require("../db");

const updadtedRateCasas = async (req, res) => {
	const { CasaDeAdopcionId } = req.params;

	try {
		const result = await CasaDeAdopcion.findOne({
			where: { id: CasaDeAdopcionId },
			include: [
				{
					model: Rating,
					attributes: ["rating"],
				},
			],
		});

		if (!result.Ratings) {
			return res.status(200).json({ averageRating: "No hay ratings" });
		}

		const ratings = result.Ratings;
		const sum = ratings.reduce((a, b) => a + b.rating, 0);
		const averageRating = sum / ratings.length;

		return res.status(200).json({ averageRating });
	} catch (error) {
		return res.status(500).json({ error: "Database error" });
	}
};

module.exports = updadtedRateCasas;
