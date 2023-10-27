const express = require("express");
const router = express.Router();
const mascotas = require("./routesMascotas");
const getPetById = require("../controllers/getPetById");
const postPetById = require("../controllers/postPetById");
const getPetByName = require("../controllers/getPetsByName");
const filtradoMascotas = require("../controllers/filtradoMascotas");
const getPets = require("../controllers/getPets");
const postCasaAdopcion = require("../controllers/postCasaDeAdopcion");
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
const routesCasaDeAdopcion = require('./routesCasaDeAdopcion')
const loginHouse = require('../controllers/loginHouse')

router.use('/casaDeAdopcion', routesCasaDeAdopcion)
router.post('/crearCasaDeAdopcion' , postCasaAdopcion)
router.post('/crearUsuario', postCrearUsuario)
router.get('/profile', authRequired, profile)
router.post('/loginHouse', loginHouse)
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

