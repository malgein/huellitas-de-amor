const {Usuario} = require('../db')

const profile = async(req, res) => {

	const {id} = req.user

	console.log(req.user)
	//EN REQ.USER ESTA EL USUARIO DESCIFRADO POR LA FUNCION VALIDORA DEL TOKEN GUARDADO POR EL MIDDLEWARE ASI OBTENMOS EL ID CORRECTO EN LA BD 
	const userFound = await Usuario.findOne({
      where: { id },
    });

	//Si no se consigue el usuario mediante el id descifrado por el token se imprime not found
	if(!userFound) return res.status(400).json({message: 'usernot found'})

	//devolvemos no todo el usuario solo lo que necesitamos de el
	return res.json({
			nombre: userFound.nombre,
			apellido: userFound.apellido,
			email: userFound.email,
			tipoDeUsuario:userFound.tipoDeUsuario,
			imagenPerfil: userFound.imagenPerfil,
			imagenPortada:userFound.imagenPortada
	})
}

module.exports = profile