const { CasaDeAdopcion, Donacion } = require('../db'); // Importa tus modelos de Sequelize

// Función para establecer la relación entre un usuario y un tipo de usuario
async function donationsHouse(req, res) {
  try {
    const { donacionId, casaDeAdopcionId } = req.body;

    // Verifica si el usuario y el tipo de usuario existen
    const donacion = await Donacion.findByPk(donacionId);
    const casaDeAdopcion = await CasaDeAdopcion.findByPk(casaDeAdopcionId);

    if (!donacion || !casaDeAdopcion) {
      return res.status(404).json({ error: 'Usuario o casa de adopcion no encontrada.' });
    }

    // Establece la relación
    donacion.setCasaDeAdopcion(casaDeAdopcion);

    return res.status(200).json({ message: 'Relación establecida con éxito.' });
  } catch (error) {
    console.error('Error al establecer la relación:', error);
    return res.status(500).json({ error: 'Error interno del servidor.' });
  }
}

module.exports = donationsHouse