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

// const crearUsuario = require("../controllers/postCrearUsuario");

const postMercadoPago = require("../controllers/postMercadoPago");
const fillDonations = require("../controllers/fillDonations");

//const rateCasas = require("./routesRateCasas");
<<<<<<< HEAD
//Todas las rutas del usuario
=======

//Todas las rutas del usuario

>>>>>>> qa
const postDonaciones = require("./routesDonaciones");
const postCrearUsuario = require("./routesUsuario");
const getUsersId = require("../controllers/getUsersId");
// const { getUsersId } = require("./routesUsuario");

//const rateCasas = require("./routesRateCasas");

// const postUsuario = require("../controllers/postCrearUsuario");
// const { perfilActualizado } = require("./routesEditarPerfil");
const { actualizarPerfil } = require("../controllers/putEditarPerfil");
<<<<<<< HEAD

=======
router.get("/perfil/:id", getUsersId);
>>>>>>> qa
router.use("/casaDeAdopcion", postCasaAdopcion);
router.post("/email", postSendEmail);
router.get("/fill", fillDonations);
router.use("/donaciones", postDonaciones);
<<<<<<< HEAD
router.post("/usuario", postCrearUsuario);
// router.put("/perfil", actualizar);

//router.use("/rate", rateCasas);//ruta para obtener promedio de calificacion

// router.put("/usuario/:id", perfilActualizado);
=======
router.use("/usuario", postUsuario);

>>>>>>> qa
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

// router.post("/", crearUsuario);

module.exports = router;
