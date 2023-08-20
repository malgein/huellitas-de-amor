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
<<<<<<< HEAD
const fillPets = require('../controllers/fillPets');
const postSendEmail = require ('../controllers/postSendEmail');

router.get('/fill', fillPets)
router.post("/email", postSendEmail);
=======
const fillPets = require("../utils/fillPets");
const postUsuario = require("./routesUsuario");
const crearUsuario = require("../controllers/crearUsuario");

router.get("/fill", fillPets);
>>>>>>> 6d369e2692971856603e11f2fd18a2f1e8da3451
router.use("/mascotas", mascotas);
router.get("/", getPets);
router.get("/nombre", getPetByName);
router.get("/:id", getPetById);
router.get("/filtro", filtradoMascotas);
router.post("/", postPetById);
router.use("/casaDeAdopcion", postCasaAdopcion);

router.use("/usuario", postUsuario);
// router.post("/", crearUsuario);

module.exports = router;
