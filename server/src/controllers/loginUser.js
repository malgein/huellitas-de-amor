const {Usuario} = require('../db')
const bcrypt = require('bcryptjs')
const createAccessToken = require('../libs/jwt')


const loginUser = async(req, res) => {
	//estrae el email y pass que el usuario introduce
	const { email, password} = req.body
	
	try {
	
	//Buscar en la BD un usuario por el email ingresado, si no lo encuantra imprime not found
	const userFound = await Usuario.findOne({ where: { email } });
	if(!userFound) return res.status(404).json({ message: 'user not found'})
	
	//encripta el password y lo guarda en isMatch
		const isMatch = await bcrypt.compare(password, userFound.password)
	//si isMatch es false quiere decir que no es la misma que el usuario envio con la de la bd asi que envia invalid pass
		if(!isMatch) return res.status(400).json({message: 'invalid password'})
	
	//le pasamos el id del nuevo usuario para que la funcion importada de libs me cree su token sobre el usuario que encntramos en la BD
	const token = await createAccessToken({id: userFound.id})
	//finalmente devuelve el usuario que seria el que ya esta logeado
	//le dice al navegador que la cookie vendra de un dominio diferente al del frontend
	res.cookie('token', token, {
		sameSite: "none",
		secure: true,
		httpOnly: false
	})
		res.json({
			nombre: userFound.nombre,
			apellido: userFound.apellido,
			email: userFound.email,
			tipoDeUsuario:userFound.tipoDeUsuario,
			imagenPerfil: userFound.imagenPerfil,
			imagenPortada:userFound.imagenPortada
	})
} catch (error) {
		res.status(500).json({ message: error.message });
}

}

module.exports = loginUser
