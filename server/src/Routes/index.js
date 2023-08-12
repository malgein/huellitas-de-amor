const { Router } = require("express");
const mascotas = require("./routesMascotas");
const { getPetById, postPetById, getPets, getPetByName } = require("./controllers");
const router = Router();

router.use("/mascotas", mascotas);
router.get("/:id", getPetById);
router.post("/", postPetById);

module.exports = router;
