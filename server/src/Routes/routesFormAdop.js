const { Router } = require("express");
const {FormularioAdop} = require('../db.js'); 
const router = Router();

// Ruta GET para obtener todos los formularios de adopción
router.get("/formadop", async (req, res) => {
    try {
        const formularios = await FormularioAdop.findAll();
        res.json(formularios);
    } catch (error) {
        console.error("Error obteniendo formularios:", error);
        res.status(500).send("Error obteniendo formularios de adopción");
    }
});

// Ruta POST para crear un nuevo formulario
router.post("/nuevoform", async (req, res) => {
    try {
        const formularioData = req.body;
        const newFormulario = await FormularioAdop.create(formularioData);
        res.json(newFormulario);
    } catch (error) {
        console.error("Error creando formulario:", error);
        res.status(500).send("Error creando formulario de adopción");
    }
});

module.exports = router;

