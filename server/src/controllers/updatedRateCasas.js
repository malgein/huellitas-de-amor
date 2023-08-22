const { Rating, CasaDeAdopcion } = require("../db");
// const { Op } = require("sequelize");

const updadtedRateCasas = async (req, res) => {
      const { CasaDeAdopcionId } = req.params;

  try {
    const result = await CasaDeAdopcion.findOne({
			where: { id: CasaDeAdopcionId },
			include: [
				{
					model: Rating,
					attributes: [
						[sequelize.fn("AVG", sequelize.col("rating")), "averageRating"],
					],
				},
			],
		});

    const averageRating = result.Ratings[0].dataValues.averageRating || 0;
    return res.status(200).json({ averageRating });
  } catch (error) {
    return res.status(500).json({ error: 'Database error' });
  }
}

module.exports = updadtedRateCasas;
