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
const postMercadoPago = require("../controllers/postMercadoPago");
const fillDonations = require("../controllers/fillDonations");

//Todas las rutas del usuario
const postDonaciones = require("./routesDonaciones");
const postCrearUsuario = require("./routesUsuario");
const getUsersId = require("../controllers/getUsersId");
// const modCompleteUser = require("../controllers/modCompleteUser");

// router.put("/usuario/:id", modCompleteUser);
router.get("/perfil/:id", getUsersId);
router.use("/casaDeAdopcion", postCasaAdopcion);
router.post("/email", postSendEmail);
router.get("/fill", fillDonations);
router.use("/donaciones", postDonaciones);
router.use("/usuario", postCrearUsuario);

// router.use("/rate", rateCasas);//ruta para obtener promedio de calificacion

//router.use("/rate", rateCasas);//ruta para obtener promedio de calificacion

router.use("/mascotas", mascotas);
router.get("/", getPets);
router.get("/nombre", getPetByName);
router.get("/:id", getPetById);
router.get("/filtro", filtradoMascotas);
router.post("/", postPetById);
router.post("/create_preference", postMercadoPago);

module.exports = router;

// // const { Router } = require("express");
// // const router = Router();

// // Rutas relacionadas con mascotas
// const mascotas = require("./routesMascotas");
// router.use("/mascotas", mascotas);

// // Rutas para obtener información de mascotas
// router.get("/", getPets);
// router.get("/:id", getPetById);
// router.get("/nombre", getPetByName);
// router.get("/filtro", filtradoMascotas);

// // Rutas relacionadas con casas de adopción
// const postCasaAdopcion = require("./routesCasaDeAdopcion");
// router.use("/casaDeAdopcion", postCasaAdopcion);

// // Ruta para enviar correos electrónicos
// router.post("/email", postSendEmail);

// // Ruta para llenar donaciones
// router.get("/fill", fillDonations);

// // Rutas relacionadas con donaciones
// const postDonaciones = require("./routesDonaciones");

// router.use("/donaciones", postDonaciones);

// // Rutas relacionadas con usuarios
// // const modCompleteUser = require("../controllers/modCompleteUser");
// const postCrearUsuario = require("./routesUsuario");
// router.use("/usuario", postCrearUsuario);

// // Ruta para obtener el perfil de un usuario específico
// router.get("/perfil/:id", getUsersId);

// // Ruta para actualizar el perfil de un usuario específico
// // router.put("/usuario/:id", modCompleteUser);

// // Ruta para procesar pagos de MercadoPago
// router.post("/create_preference", postMercadoPago);

// module.exports = router;
