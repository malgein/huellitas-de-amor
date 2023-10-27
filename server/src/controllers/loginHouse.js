const {CasaDeAdopcion} = require('../db')
const bcrypt = require('bcryptjs')
const createAccessToken = require('../libs/jwt')


const loginHouse = async(req, res) => {
	//estrae el email y pass que el usuario introduce
	const { email, password} = req.body
	
	try {
	
	//Buscar en la BD una casa de adopcion por el email ingresado, si no lo encuantra imprime not found
	const houseFound = await CasaDeAdopcion.findOne({ where: { email } });
	if(!houseFound) return res.status(404).json({ message: 'house not found'})
	
	//encripta el password y lo guarda en isMatch
		const isMatch = await bcrypt.compare(password, houseFound.password)
	//si isMatch es false quiere decir que no es la misma que el usuario envio con la de la bd asi que envia invalid pass
		if(!isMatch) return res.status(400).json({message: 'invalid password'})
	
	//le pasamos el id del nuevo usuario para que la funcion importada de libs me cree su token sobre el usuario que encntramos en la BD
	const token = await createAccessToken({id: houseFound.id})
	//finalmente devuelve el usuario que seria el que ya esta logeado
	//le dice al navegador que la cookie vendra de un dominio diferente al del frontend
	res.cookie('token', token, {
		sameSite: "none",
		secure: true,
		httpOnly: false
	})
		res.json({
			nombreDeOng: houseFound.nombreDeOng,
			nombreDeContacto: houseFound.nombreDeContacto,
			email: houseFound.email,
			telefono :houseFound.telefono,
			ubicacion: houseFound.ubicacion,
			foto: houseFound.foto,
			ratings: houseFound.ratings
	})
} catch (error) {
		res.status(500).json({ message: error.message });
}

}

module.exports = loginHouse
