const {Usuario, CasaDeAdopcion} = require('../db')
const jwt = require("jsonwebtoken");
const TOKEN_SECRET = require('../config')

const verifyToken = async (req, res) => {
	//verifica el token que llega por headers
  const { token } = req.cookies;
	// console.log(token)
	//si el token no existe responde con un error
  if (!token) return res.status(401).json({message: 'unauthorized'})
//jwt verifica el token  si hay un error responde 
  jwt.verify(token, TOKEN_SECRET, async (error, user) => {
    if (error) return res.sendStatus(401);
//guardamos el usuario en una variable aquel que coincide con el id en la bd
		//Aqui deberiamos poder agregar logica para traer todas las relaciones de los usuarios que se logean
const userFound = await Usuario.findByPk(user.id);
	console.log(user)
		//Si no se consigue coincidencia en la bd retornamos un error
		//Esta es una buena oportunidad para crear una logica que si no lo encuentra en la bd lo crea

		if(userFound){
			return res.json({
				id: userFound.id,
				nombre: userFound.nombre,
				apellido: userFound.apellido,
				email: userFound.email,
				tipoDeUsuario:userFound.tipoDeUsuario,
				imagenPerfil: userFound.imagenPerfil,
				imagenPortada:userFound.imagenPortada
			});
		}

		//Aqui deberiamos poder agregar logica para traer todas las relaciones de las casas que se logean
		const houseFound = await CasaDeAdopcion.findByPk(user.id)

		if(houseFound){
			return res.json({
				id: houseFound.id,
				nombreDeOng : houseFound.nombreDeOng,
				nombreDeContacto: houseFound.nombreDeContacto,
				email:	houseFound.email,
				telefono: houseFound.telefono,
				ubicacion: houseFound.ubicacion,
				foto: houseFound.foto,
			});
		}

    if (!userFound || !houseFound) return res.sendStatus(401);

		//en caso contrario devuelve los datos del usuario encontrado, bueno al menos los datos que necesitamos
   
  });
};

module.exports = verifyToken