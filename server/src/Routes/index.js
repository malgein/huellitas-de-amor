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
const postSendEmail = require("../controllers/postSendEmail");

const postCrearUsuario = require("../controllers/postCrearUsuario");
const postMercadoPago = require("../controllers/postMercadoPago");
const fillDonations = require("../controllers/fillDonations");
<<<<<<< HEAD
//const rateCasas = require("./routesRateCasas");
//Todas las rutas del usuario
const postDonaciones = require('./routesDonaciones')
const postUsuario = require('./routesUsuario')
=======
>>>>>>> 3c3bb3cd87ba9c53e25a983ce4e0917cbde9063b

//const rateCasas = require("./routesRateCasas");

//Todas las rutas del usuario
const postDonaciones = require("./routesDonaciones");
const postUsuario = require("./routesUsuario");

router.use("/casaDeAdopcion", postCasaAdopcion);
router.post("/email", postSendEmail);
router.get("/fill", fillDonations);
router.use("/donaciones", postDonaciones);
router.use("/usuario", postCrearUsuario);


//router.use("/rate", rateCasas);//ruta para obtener promedio de calificacion

<<<<<<< HEAD
//router.use("/rate", rateCasas);//ruta para obtener promedio de calificacion
=======
>>>>>>> 3c3bb3cd87ba9c53e25a983ce4e0917cbde9063b
router.use("/mascotas", mascotas);
router.get("/", getPets);
router.get("/nombre", getPetByName);
router.get("/:id", getPetById);
router.get("/filtro", filtradoMascotas);
router.post("/", postPetById);
router.post("/create_preference", postMercadoPago);

// router.post("/", crearUsuario);

module.exports = router;
