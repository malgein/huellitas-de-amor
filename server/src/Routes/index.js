const { Router } = require("express");
const router = Router();
const mascotas = require("./routesMascotas");
const getPetById = require("../controllers/getPetById");
const postPetById = require("../controllers/postPetById");
const getPetByName = require("../controllers/getPetsByName");
const filtradoMascotas = require("../controllers/filtradoMascotas");
const getPets = require("../controllers/getPets");
const postCasaAdopcion = require("./routesCasaDeAdopcion");
const fillDonations = require("../controllers/fillDonations");
const rateCasas = require("./routesRateCasas");
//Todas las rutas del usuario
const postUsuario = require("./routesUsuario");
const postDonaciones = require('./routesDonaciones')



router.get("/fill", fillDonations);
router.use('/donaciones', postDonaciones)
router.use("/usuario", postUsuario);
router.use("/casaDeAdopcion", postCasaAdopcion);
router.use("/rate", rateCasas);//ruta para obtener promedio de calificacion
router.use("/mascotas", mascotas);
router.get("/", getPets);
router.get("/nombre", getPetByName);
router.get("/:id", getPetById);
router.get("/filtro", filtradoMascotas);
router.post("/", postPetById);

// router.post("/", crearUsuario);

module.exports = router;
