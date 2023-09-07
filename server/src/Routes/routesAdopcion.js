const { Router } = require("express");
const router = Router();
const { Adopcion } = require("../db");
const { Usuario } = require("../db");

const getAdoptionUser = require("../controllers/getAdoptionUser");

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const adoptinId = await getAdoptionUser(id);
    return res.status(200).json(adoptinId);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error en el servidor" });
  }
});

module.exports = router;
