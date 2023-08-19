const { Router } = require("express");
const router = Router();
const crearUsuario = require("../controllers/crearUsuario");

router.post("/", async (req, res) => {
  try {
    const response = req.body;
    const usuarioPost = await crearUsuario(response);
    res.status(200).json(usuarioPost);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
});

module.exports = router;
