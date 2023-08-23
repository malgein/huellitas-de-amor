const { Rating, CasaDeAdopcion } = require("../db");
const { Op } = require("sequelize");

const newRateCasas =  async (req, res) => {
//   const { CasaDeAdopcionId } = req.params;
  const { rating, CasaDeAdopcionId } = req.body;

  if (!rating || rating < 1 || rating > 5) {
    return res.status(400).json({ error: 'Invalid rating value' });
  }

  try {
    const adoptionHouse = await CasaDeAdopcion.findByPk(CasaDeAdopcionId);

    if (!adoptionHouse) {
      return res.status(404).json({ error: 'Casa de adopción no registrada' });
    }

    await Rating.create({
      rating,
      CasaDeAdopcionId: CasaDeAdopcionId,
    });

    return res.status(200).json({ message: 'Rating creado' });
  } catch (error) {
    return res.status(500).json({ error: 'Database error' });
  }
}

module.exports = newRateCasas;
