const { Router } = require("express");
const mascotas = require("./routesMascotas");

const router = Router();

router.use("/mascotas", mascotas);

module.exports = router;
