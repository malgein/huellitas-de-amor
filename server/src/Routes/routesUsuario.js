const { Router } = require("express");
const router = Router();
const crearUsuario = require("../controllers/postCrearUsuario");
// const getUsersId = require("../controllers/getUsersId");

//controlador que llena la bd de usuarios para prueba
const llenarUsuario = require("../utils/llenarUsuario");
const getUsers = require("../controllers/getUsers");
const modUserById = require("../controllers/modUsersById");
const deleteUsersById = require("../controllers/deleteUsersById");
const modCompleteUser = require("../controllers/modCompleteUser");
const getUserById = require("../controllers/getUserById");
const findTypesUsers = require("../controllers/findTypeUsers");
const usuarioTipoController = require("../controllers/usuarioTipoController");

router.post("/crearUsuario", async (req, res) => {
	try {
		const response = req.body;
		const usuarioPost = await crearUsuario(response);
		res.status(200).json(usuarioPost);
	} catch (error) {
		res.status(error.status || 500).json({ message: error.message });
	}
});

router.get("/tipoDeUsuario", async (req, res) => {
	try {
		// const {id} = req.params
		const userType = await findTypesUsers();
		return res.status(200).json(userType);
	} catch (error) {
		return res.status(500).json({ mensaje: "Error en el servidor" });
	}
});

//controlador que funciona con propositos de llenar la base de datos con datos de usuario para testeo
// router.get("/fill", async (req, res) => {
//   try {
//     //Esta linea de codigo borra la tabla para asegurarse que no se vuelva a rescribir la informacion que le estamos a punto de pasar

//     // Llena la tabla con los datos de users que al final son los datos de data.js es decir todas los usuarios
//     // await Usuario.bulkCreate(allUsers);

//     //Llama llenarUsuario que usa un metodo de sequelize llamado bulkCreate que llena la la base de datos con data de usuarios validos

//     console.log(llenarUsuario);
//     const getFill = () => llenarUsuario();

//     getFill();

//     res
//       .status(200)
//       .json({ message: "Datos de usuarios llenados exitosamente" });
//   } catch (error) {
//     console.error("Error al llenar los datos:", error);
//     res
//       .status(500)
//       .json({ error: "Error al llenar los datos de los usuarios" });
//   }
// });

//Ruta que me trae todos los usuarios de la base de datos necesario para la gestion de usuarios en el componente admin
router.get("/", async (req, res) => {
	try {
		const data = await getUsers();
		console.log(data);

		return res.status(200).json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

router.patch("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const response = req.body;
		console.log(response);
		const userId = await modUserById(id, response);
		return res.status(200).json(userId);
	} catch (error) {
		return res.status(500).json({ mensaje: "Error en el servidor" });
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const userId = await deleteUsersById(id);
		return res.status(200).json(userId);
	} catch (error) {
		return res.status(500).json({ mensaje: "Error en el servidor" });
	}
});

router.put("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const response = req.body;
		console.log(response);
		const userId = await modCompleteUser(id, response);
		return res.status(200).json(userId);
	} catch (error) {
		return res.status(500).json({ mensaje: "Error en el servidor" });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const userId = await getUserById(id);
		return res.status(200).json(userId);
	} catch (error) {
		return res.status(500).json({ mensaje: "Error en el servidor" });
	}
});

//Probando obtener usuario por ID
// router.get("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const usuario = await getUsersId(id);

//     // if (!usuario) {
//     //   return res.status(404).json({ mensaje: "Usuario no encontrado" });
//     // }
//     return res.status(200).json(usuario);
//   } catch (error) {
//     return res.status(500).json({ mensaje: "Error en el servidor" });
//   }
// });

// router.get('/relacionarTipo', async(req, res) => {
//   try{
//     const {usuarioId, tipoDeUsuarioId} = req.body
//     console.log(usuarioId, tipoDeUsuarioId)
//     const userRelation = usuarioTipoController(usuarioId, tipoDeUsuarioId)
//     res.status(200).json(userRelation)
//   } catch(error){
//     res
//     .status(500)
//     .json({ error: error.message});
//   }
// })

module.exports = router;
