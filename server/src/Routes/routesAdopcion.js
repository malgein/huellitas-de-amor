const { Router } = require("express");
const router = Router();
const { Adopcion } = require("../db");
const { Usuario } = require("../db");

const getAdoptionUser = require("../controllers/getAdoptionUser");

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const adoptionCount = await getAdoptionUser(id);

    if (adoptionCount === 0) {
      return res.status(200).json({ mensaje: "Usuario no tiene adopciones" });
    }

    return res.status(200).json(adoptionCount);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error en el servidor" });
  }
});

module.exports = router;
