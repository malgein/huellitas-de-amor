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
const postCasaDeAdopcion = require("../controllers/postCasaDeAdopcion");
const postSendEmail = require("../controllers/postSendEmail");
const postMercadoPago = require("../controllers/postMercadoPago");
const fillDonations = require("../controllers/fillDonations");

// const rateCasas = require("./routesRateCasas")
const fillPets = require("../utils/fillPets");
// const postDonaciones = require('./routesDonaciones')
const postUsuario = require("./routesUsuario");

//const rateCasas = require("./routesRateCasas");

//Todas las rutas del usuario

const postDonaciones = require("./routesDonaciones");
const postCrearUsuario = require("./routesUsuario");
const getUsersId = require("../controllers/getUsersId");

// router.get("/fill", fillPets);

// const { perfilActualizado } = require("./routesEditarPerfil");
const { actualizarPerfil } = require("../controllers/putEditarPerfil");

const modPetById = require("../controllers/modPetById");

router.get("/perfil/:id", getUsersId);

router.use("/casaDeAdopcion", postCasaAdopcion);
router.post("/email", postSendEmail);
router.get("/fill", fillDonations);
// router.use("/donaciones", postDonaciones);
router.use("/usuario", postUsuario);

//router.use("/rate", rateCasas);//ruta para obtener promedio de calificacion

// router.put("/usuario/:id", perfilActualizado);

router.put("/usuario/:id", actualizarPerfil);

// router.use("/rate", rateCasas);//ruta para obtener promedio de calificacion

//router.use("/rate", rateCasas);//ruta para obtener promedio de calificacion

router.use("/mascotas", mascotas);

router.get("/", getPets);
router.get("/nombre", getPetByName);
router.get("/:id", getPetById);
router.get("/filtro", filtradoMascotas);
router.post("/", postPetById);
router.post("/create_preference", postMercadoPago);

router.put("/:id/estado", modPetById);

// router.post("/", crearUsuario);

module.exports = router;
