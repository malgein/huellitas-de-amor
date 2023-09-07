// const { initializeApp } = require("firebase-admin/app");
// const { getAppCheck } = require("firebase-admin/app-check");


// const firebaseApp = initializeApp();

// const appCheckVerification = async (req, res, next) => {
// 	const appCheckToken = req.header("X-Firebase-AppCheck");

// 		console.log(appCheckToken)
//     if (!appCheckToken) {
//         res.status(401);
//         return next("Unauthorized");
//     }

//     try {
//         const appCheckClaims = await getAppCheck().verifyToken(appCheckToken);
// 				console.log(appCheckClaims)
//         // If verifyToken() succeeds, continue with the next middleware
//         // function in the stack.
//         return next();
//     } catch (err) {
//         res.status(401);
//         return next("Unauthorized");
//     }
// }
//  module.exports = appCheckVerification

const { Usuario , TipoDeUsuario, Donacion} = require("../db");

const createUsersFirebase = async(response) => {
	try {
		// Verifica si el ID ya existe en la base de datos
		const usuarioExistente = await Usuario.findOne({
			where: { id: response.id },
			include: [
        {
          model: TipoDeUsuario,
           // Alias opcional para TipoDeUsuario
        },
        {
          model: Donacion,
         // Alias opcional para Donaciones
        },
      ],
		});
	
		if (usuarioExistente) {
			return usuarioExistente;
		}
	
		// Crea el nuevo usuario
		const nuevoUsuario = await Usuario.create({
			id: response.id,
			nombre: response.nombre,
			apellido: response.apellido,
			email: response.email,
			password: response.password
			// Otros campos de usuario
		});
		
		const usuario = await Usuario.findByPk(response.id);
		console.log(usuario)
    const tipoDeUsuario = await TipoDeUsuario.findByPk(3);
	  
		// Establece la relación
    usuario.setTipoDeUsuario(tipoDeUsuario);

		return nuevoUsuario;
	} catch (error) {
		console.error('Error al crear el usuario:', error);
		return { error: 'Error al crear el usuario' };
	}
}

module.exports = createUsersFirebase