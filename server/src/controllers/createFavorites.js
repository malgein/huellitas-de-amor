const Usuario = require('../db')
const Mascota = require('../db')
const Favorito = require('../db')

const  addFavorite = async (req, res) => {
	//Necesito saber la forma de llamar a estos id de usuario y mascota
	const {usuarioId,  mascotaId} = req.body

	const usuario = await Usuario.findByPk(usuarioId)
	const mascota = await Mascota.findByPk(mascotaId);

  if (!usuario || !mascota) {
    // Manejar error si el usuario o la mascota no existen
    throw('Debes proporcionar una mascota y un usuario valido')
  }

	await Favorito.create({
    usuarioId: usuarioId,
    mascotaId: mascotaId,
  });

  // Incrementar likes_count en la mascota si lo deseas
	//Aqui deberia de aumentar los likes de las mascota si tuviera esa propiedad

}