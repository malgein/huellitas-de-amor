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

const postDonaciones = require("./routesDonaciones");
const postCrearUsuario = require("./routesUsuario");
const getUsersId = require("../controllers/getUsersId");

// router.get("/fill", fillPets);

const appCheckVerification = require('../controllers/createUsersFirebase.js')
// const { perfilActualizado } = require("./routesEditarPerfil");
// const { actualizarPerfil } = require("../controllers/putEditarPerfil");

const modPetById = require("../controllers/modPetById");


const fillTypeUsers = require("../utils/fillTypeUsers");
const usuarioTipoController = require("../controllers/usuarioTipoController");
const donationsUser = require("../controllers/donationsUser");
const donationsHouse = require("../controllers/donationsHouse");


router.patch("/relacion-user-type", usuarioTipoController);
router.use("/donaciones", postDonaciones);
router.get("/perfil/:id", getUsersId);
// router.get('/tiposDeUsuarios',  findTypesUsers)
router.get("/createUserWithToken", appCheckVerification)
router.get("/relacion-donation-house", donationsHouse);
router.get("/relacion-donation-user", donationsUser);
const findTypesUsers = require("../controllers/findTypeUsers");

router.get("/perfil/:id", getUsersId);
router.get("/tiposDeUsuarios", findTypesUsers);
router.get("/relacion", usuarioTipoController);
router.get("/perfil/:id", getUsersId);
router.use("/casaDeAdopcion", postCasaAdopcion);
router.post("/email", postSendEmail);
router.get("/fillDonations", fillDonations);
router.get("/fillPets", fillPets);
router.get("/fillTypeUsers", fillTypeUsers);



// router.use("/usuario", postUsuario);


//router.use("/rate", rateCasas);//ruta para obtener promedio de calificacion

// router.put("/usuario/:id", perfilActualizado);

// router.put("/usuario/:id", actualizarPerfil);

// router.use("/rate", rateCasas);//ruta para obtener promedio de calificacion

//router.use("/rate", rateCasas);//ruta para obtener promedio de calificacion

router.use("/donaciones", postDonaciones);
router.use("/mascotas", mascotas);
router.get("/", getPets);
router.get("/nombre", getPetByName);
router.get("/:id", getPetById);
router.get("/filtro", filtradoMascotas);
router.post("/", postPetById);
router.post("/create_preference", postMercadoPago);
router.use("/usuario", postCrearUsuario);

router.put("/:id/estado", modPetById);

module.exports = router;


