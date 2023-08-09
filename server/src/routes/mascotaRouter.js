const { Router } = require("express");

const postMascota = require("../controllers/postMascota");



const mascotaRouter = Router();
mascotaRouter.post("/", postMascota)

	

module.exports = mascotaRouter;
