// * viejo que si anda
const { Usuario} = require("../db");
const bcrypt = require('bcryptjs')
//para verificar los tokens
const jwt = require("jsonwebtoken");
const TOKEN_SECRET = require('../config')
const createAccessToken = require('../libs/jwt')

const postCrearUsuario = async(req, res) => {
  const {  nombre,
      apellido,
      email,
      // imagenPerfil,
      password,
      nacionalidad,
      ubicacion,
      direccion,
      telefono,
      acerca } = req.body
		// console.log(email, username, password)

	

	try {

    if (!nombre || !apellido || !email || !password || !nacionalidad || !ubicacion || !direccion || !acerca || !telefono ) {
            return res.status(404).json({ message: "Faltan datos" });
    }
    
		//guardamos en una constante un valor si el correo del usuario existe
		const userFound = await Usuario.findOne({ where: { email } });


		//Si esa variable que guarda el correo del usuario que esta resgitrando existe, es decir lo haya en la base de datos envia un mensaje de error de el email ya existe
		if(userFound) return res.status(400).json({message:'email already exists'})

	
    //encripta el password
		const passwordHash = await bcrypt.hash(password, 10)
		// console.log(newUser)
		//El usuario que es creado pretende ser devuelto aunque no completo
    const nuevoUsuario = await Usuario.create({
            nombre,
            apellido,
            email,
            nacionalidad,
            // imagenPerfil,
            password: passwordHash,
            ubicacion,
            direccion,
            telefono,
            acerca
          });
		//le pasamos el id del nuevo usuario para que la funcion importada de libs me cree su token
		const token = await createAccessToken({id: nuevoUsuario.id})
		//funcion que crea el token del usuario
		res.cookie('token', token)
		return	res.status(201).json({
				id: nuevoUsuario.id,
		 		nombre: nuevoUsuario.nombre,
        apellido: nuevoUsuario.apellido,
				email: nuevoUsuario.email,
        nacionalidad: nuevoUsuario.nacionalidad,
        ubicacion: nuevoUsuario.ubicacion,
        direccion: nuevoUsuario.direccion,
        telefono: nuevoUsuario.telefono,
        acerca : nuevoUsuario.acerca
		})

		//Esta es la forma de obtener para el frontend solo los datos que necesito para el usuario
		//el password no es necesario por eso se excluye del objeto
		// res.json({

		// })
	} catch (error) {
			res.status(500).json({ message: error.message });
	}
	
}

// const postCrearUsuario = async ({ name, email }) => {
//   try {
//     if (!name || !email) {
//       return { status: 401, message: "Faltan datos" };
//     }

//     const nuevoUsuario = await Usuario.create({
//       nombre,
//       email,
//     });

//     const auth0User = await auth0.createUser({
//       email,
//       name: nombre,
//     });

//     console.log("Nuevo usuario creado en Auth0:", auth0User);
//     console.log("Nuevo usuario creado en la base de datos:", nuevoUsuario);

//     return nuevoUsuario;
//   } catch (error) {
//     throw { error: error?.status, message: error?.message };
//   }
// };

module.exports = postCrearUsuario;

