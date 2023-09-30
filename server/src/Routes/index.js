const express = require("express");
const router = express.Router();
const mascotas = require("./routesMascotas");
const getPetById = require("../controllers/getPetById");
const postPetById = require("../controllers/postPetById");
const getPetByName = require("../controllers/getPetsByName");
const filtradoMascotas = require("../controllers/filtradoMascotas");
const getPets = require("../controllers/getPets");
const postCasaAdopcion = require("./routesCasaDeAdopcion");
// const postCasaDeAdopcion = require("../controllers/postCasaDeAdopcion");
const postCasaDeAdopcion = require("../controllers/postCasaDeAdopcion");
const postSendEmail = require("../controllers/postSendEmail");
const postMercadoPago = require("../controllers/postMercadoPago");
const fillDonations = require("../controllers/fillDonations");
// const rateCasas = require("./routesRateCasas")
const fillPets = require("../utils/fillPets");
// const postDonaciones = require('./routesDonaciones')
const postDonaciones = require("./routesDonaciones");
const routesUsuarios = require("./routesUsuario");
const postCrearUsuario = require('../controllers/postCrearUsuario')
const getUsersId = require("../controllers/getUsersId");
const getAdoptionUser = require("../controllers/getAdoptionUser");

// router.get("/fill", fillPets);
const modPetById = require("../controllers/modPetById");
const donationsUser = require("../controllers/donationsUser");
const donationsHouse = require("../controllers/donationsHouse");
const {formularioAdopt} = require("../controllers/FormularioAdop");
// const getAdoptionUser=require("../controllers/getAdoptionUser");
const getUsers = require("../controllers/getUsers");
const loginUser = require('../controllers/loginUser')
const logOut = require('../controllers/logOut')
const profile = require('../controllers/profile')
const authRequired = require('../middlewares/authRequired');
const verifyToken = require('../controllers/verifyToken')
const changeUserStatus = require('../controllers/changeUserStatus')

router.post('/crearUsuario', postCrearUsuario)
router.get('/profile', authRequired, profile)
router.post('/loginUser', loginUser)
router.post('/logoutUser', logOut)
router.use("/usuario", routesUsuarios);
router.use("/donaciones", postDonaciones);
router.get("/verify", verifyToken);
router.patch('/cambiarTipo/:id', changeUserStatus)

router.get("/relacion-donation-house", donationsHouse);
router.get("/relacion-donation-user", donationsUser);
router.get('/usuarios', getUsers)
router.delete("/usuarios/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const userId = await deleteUsersById(id);
		return res.status(200).json(userId);
	} catch (error) {
		return res.status(500).json({ mensaje: "Error en el servidor" });
	}
});
router.patch("/usuarios/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const response = req.body;
        console.log(response);
        const userId = await modUserById(id, response);
        return res.status(200).json(userId);
    } catch (error) {
        return res.status(500).json({ mensaje: "Error en el servidor" })
    }
}) 

router.get("/perfil/:id", getUsersId);
// router.get("/perfil/:id", getUsersId);
router.use("/casaDeAdopcion", postCasaAdopcion);
router.post("/email", postSendEmail);
router.get("/fillDonations", fillDonations);
router.get("/fillPets", fillPets);
// router.post("/crearUsuario", postCrearUsuario);
// router.use("/usuario", postUsuario);
router.use("/donaciones", postDonaciones);
router.use("/mascotas", mascotas);
router.get("/", getPets);
router.get("/nombre", getPetByName);
router.get("/:id", getPetById);
router.get("/filtro", filtradoMascotas);
router.post("/", postPetById);
router.post("/create_preference", postMercadoPago);


router.put("/:id/estado", modPetById);
router.get("/adopcion/:usuarioId", getAdoptionUser);
router.get("/formadop", formularioAdopt);

module.exports = router;

// const { Router } = require("express");
// const router = Router();

// // Importaciones de rutas y controladores
// const {mascotas} = require("./routesMascotas");
// const getPetById = require("../controllers/getPetById");
// const postPetById = require("../controllers/postPetById");
// const getPetByName = require("../controllers/getPetsByName");
// const filtradoMascotas = require("../controllers/filtradoMascotas");
// const getPets = require("../controllers/getPets");
// const {postCasaDeAdopcion} = require("../controllers/postCasaDeAdopcion");
// // const postCasaDeAdopcionController = require("../controllers/postCasaDeAdopcion"); // Cambiado el nombre para evitar duplicados
// const formularioAdopcion = require("../controllers/FormularioAdop");
// const postSendEmail = require("../controllers/postSendEmail");
// const postMercadoPago = require("../controllers/postMercadoPago");
// // const fillDonations = require("../controllers/fillDonations");
// const fillPets = require("../utils/fillPets");
// const {postUsuario} = require("./routesUsuario");
// const {postDonaciones} = require("./routesDonaciones");
// const postCrearUsuario = require("./routesUsuario");
// const getUsersId = require("../controllers/getUsersId");
// const { actualizarPerfil } = require("../controllers/putEditarPerfil");
// const modPetById = require("../controllers/modPetById");
// const fillTypeUsers = require('../utils/fillTypeUsers')
// const usuarioTipoController = require('../controllers/usuarioTipoController')
// const findTypesUsers = require('../controllers/findTypeUsers');

// // Rutas
// router.get("/perfil/:id", getUsersId);
// router.get('/tiposDeUsuarios', findTypesUsers);
// router.get("/relacion", usuarioTipoController);
// router.use("/casaDeAdopcion", postCasaDeAdopcion);
// router.post("/email", postSendEmail);
// //router.get("/fill", fillDonations);   // Comentado, SI NO SIRVE AFUERA COMO DICE MILEI =)
// router.get("/fillPets", fillPets);
// router.get("/fillTypeUsers", fillTypeUsers);
// router.use("/donaciones", postDonaciones);
// router.use("/usuario", postUsuario);
// router.put("/usuario/:id", actualizarPerfil);
// router.use("/mascotas", mascotas);
// router.get("/", getPets);
// router.get("/nombre", getPetByName);
// router.get("/:id", getPetById);
// router.get("/filtro", filtradoMascotas);
// router.post("/", postPetById);
// router.post("/create_preference", postMercadoPago);
// router.put("/:id/estado", modPetById);

// // Rutas para Formularios de Adopcion
// router.get("/formadop", formularioAdopcion);
// router.post("/nuevoform", postCrearUsuario);

// // router.post("/", crearUsuario);  // Comentado, SI NO SIRVE AFUERA COMO DICE MILEI =)

// module.exports = router;

// const { Router } = require("express");
// const router = Router();
// const mascotas = require("./routesMascotas");
// const getPetById = require("../controllers/getPetById");
// const postPetById = require("../controllers/postPetById");
// const getPetByName = require("../controllers/getPetsByName");
// const filtradoMascotas = require("../controllers/filtradoMascotas");
// const getPets = require("../controllers/getPets");
// const postCasaAdopcion = require("./routesCasaDeAdopcion");
// const formularioAdopt = require("../controllers/FormularioAdop.js");

// const postCasaDeAdopcion = require("../controllers/postCasaDeAdopcion");
// const postSendEmail = require("../controllers/postSendEmail");
// const postMercadoPago = require("../controllers/postMercadoPago");
// const fillDonations = require("../controllers/fillDonations");

// const fillPets = require("../utils/fillPets");

// const postUsuario = require("./routesUsuario");

// const postDonaciones = require("./routesDonaciones");
// const postCrearUsuario = require("./routesUsuario");
// const getUsersId = require("../controllers/getUsersId");
// // const { getUsersId } = require("./routesUsuario");

// //Todas las rutas del usuario

// const postDonaciones = require("./routesDonaciones");
// const postCrearUsuario = require("./routesUsuario");
// const getUsersId = require("../controllers/getUsersId");
// // const { getUsersId } = require("./routesUsuario");

// router.get('/tiposDeUsuarios',  findTypesUsers)
// router.get("/relacion", usuarioTipoController);
// router.get("/perfil/:id", getUsersId);
// router.use("/casaDeAdopcion", postCasaAdopcion);
// router.post("/email", postSendEmail);
// // router.get("/fill", fillDonations);
// router.get("/fillPets", fillPets);
// router.get("/fillTypeUsers", fillTypeUsers);
// router.use("/donaciones", postDonaciones);
// router.use("/usuario", postUsuario);

// // router.put("/usuario/:id", perfilActualizado);

// // const { perfilActualizado } = require("./routesEditarPerfil");
// const { actualizarPerfil } = require("../controllers/putEditarPerfil");

// const modPetById = require("../controllers/modPetById");
// const fillTypeUsers = require('../utils/fillTypeUsers')
// const usuarioTipoController = require('../controllers/usuarioTipoController')
// const findTypesUsers = require('../controllers/findTypeUsers')
// router.get("/perfil/:id", getUsersId);

// router.get("/", getPets);
// router.get("/nombre", getPetByName);
// router.get("/:id", getPetById);
// router.get("/filtro", filtradoMascotas);
// router.post("/", postPetById);
// router.post("/create_preference", postMercadoPago);

// router.get('/tiposDeUsuarios',  findTypesUsers)
// router.get("/relacion", usuarioTipoController);
// router.get("/perfil/:id", getUsersId);
// router.use("/casaDeAdopcion", postCasaAdopcion);
// router.post("/email", postSendEmail);
// // router.get("/fill", fillDonations);
// router.get("/fillPets", fillPets);
// router.get("/fillTypeUsers", fillTypeUsers);
// router.use("/donaciones", postDonaciones);
// router.use("/usuario", postUsuario);

// //Fromularios de Adopcion

// router.post("/nuevoform", postCrearUsuario);

// // router.post("/", crearUsuario);

// // router.put("/usuario/:id", perfilActualizado);

// router.put("/usuario/:id", actualizarPerfil);

// router.use("/mascotas", mascotas);

// router.get("/", getPets);
// router.get("/nombre", getPetByName);
// router.get("/:id", getPetById);
// router.get("/filtro", filtradoMascotas);
// router.post("/", postPetById);
// router.post("/create_preference", postMercadoPago);

// router.put("/:id/estado", modPetById);

// //Fromularios de Adopcion
// router.get("/formadop", formularioAdopt);
// router.post("/nuevoform", formularioAdopt);

// // router.post("/", crearUsuario);

// module.exports = router;
