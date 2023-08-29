const { Router } = require("express");
const router = Router();
const actualizarPerfil = require("../controllers/putEditarPerfil");


//Actualizar perfil de usuario
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const response = req.body;
  
    try {
      const userId = await actualizarPerfil(response, id);
  
      res.status(200).json(userId);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al actualizar el perfil" });
    }
  });
