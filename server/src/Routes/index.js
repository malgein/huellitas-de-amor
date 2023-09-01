const { Router } = require("express");
const router = Router();
const mascotas = require("./routesMascotas");
const getPetById = require("../controllers/getPetById");
const postPetById = require("../controllers/postPetById");
const getPetByName = require("../controllers/getPetsByName");
const filtradoMascotas = require("../controllers/filtradoMascotas");
const getPets = require("../controllers/getPets");
const postCasaAdopcion = require("./routesCasaDeAdopcion");
// const postCasaDeAdopcion = require("../controllers/postCasaDeAdopcion");
const postSendEmail = require ('../controllers/postSendEmail');

const crearUsuario = require("../controllers/crearUsuario");
const postMercadoPago = require("../controllers/postMercadoPago");
const fillDonations = require("../controllers/fillDonations");
// const rateCasas = require("./routesRateCasas");
//Todas las rutas del usuario
const fillPets = require('../utils/fillPets')
const postDonaciones = require('./routesDonaciones')
const postUsuario = require('./routesUsuario')


router.get("/fill", fillPets);
router.use("/usuario", postUsuario);
router.use("/mascotas", mascotas);
router.use("/casaDeAdopcion", postCasaAdopcion);
router.post("/email", postSendEmail);
router.use('/donaciones', postDonaciones)

// router.use("/rate", rateCasas);//ruta para obtener promedio de calificacion
router.get("/", getPets);
router.get("/nombre", getPetByName);
router.get("/:id", getPetById);
router.get("/filtro", filtradoMascotas);
router.post("/", postPetById);
router.post("/create_preference", postMercadoPago)


// router.post("/", crearUsuario);

module.exports = router;
