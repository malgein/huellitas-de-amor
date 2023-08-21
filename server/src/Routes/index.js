const { Router } = require("express");
const router = Router();
const mascotas = require("./routesMascotas");
const getPetById = require("../controllers/getPetById");
const postPetById = require("../controllers/postPetById");
const getPetByName = require("../controllers/getPetsByName");
const filtradoMascotas = require("../controllers/filtradoMascotas");
const getPets = require("../controllers/getPets");
const postCasaAdopcion = require("./routesCasaDeAdopcion");
const postCasaDeAdopcion = require("../controllers/postCasaDeAdopcion");
const postSendEmail = require ('../controllers/postSendEmail');
const postUsuario = require("./routesUsuario");
const crearUsuario = require("../controllers/crearUsuario");
const postMercadoPago = require("../controllers/postMercadoPago");


router.post("/email", postSendEmail);
router.use("/mascotas", mascotas);
router.get("/", getPets);
router.get("/nombre", getPetByName);
router.get("/:id", getPetById);
router.get("/filtro", filtradoMascotas);
router.post("/", postPetById);
router.post("/create_preference", postMercadoPago)
router.use("/casaDeAdopcion", postCasaAdopcion);

router.use("/usuario", postUsuario);
// router.post("/", crearUsuario);

module.exports = router;
