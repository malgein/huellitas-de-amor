const jwt = require('jsonwebtoken')
const TOKEN_SECRET = require('../config')

//Fundiocion que valida el toquen del usuario antes de entregarle su perfil
const authRequired = (req, res, next) => {
	// console.log('validando el token')
	//el token lo recibo por el header y se guarda cada vez que hago login
	try{

		const {token} = req.cookies
	
		//Si no hay token acceso denegado
		if(!token) return res.status(401).json({message: 'no token, no authorization'})
	
		jwt.verify(token, TOKEN_SECRET, (err, user) => {
			//verifica si el token que llego es valido
			if(err) return res.status(403).json({message: "invalid token"})

			//guardo los datos del user es decir el id del usuario del token que es lo que mas me interesa en req.user para que esta funcion siendo un midleware pueda pasarle ese valor al siguiente controlador que seria profile
			req.user = user
			//esto hace que continue lo que sigue despues del middleware
			next()
		})
	}catch(error){
		res.status(500).json({error: error.message})
	}

}

module.exports = authRequired