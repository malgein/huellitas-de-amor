const express = require("express");
const router = express.Router();
const { Usuario, Adopcion } = require("../db"); // Importa tus modelos

const getAdoptionUser = async (req, res) => {
  try {
    const usuarioId = req.params.usuarioId;

    // Realiza una consulta para contar las adopciones del usuario
    const conteoAdopciones = await Adopcion.count({
      where: {
        usuarioId: usuarioId,
      },
    });

    if (!conteoAdopciones) {
      return res.status(404).json({ mensaje: "Usuario no tiene adopciones" });
    }

    res.status(200).json(conteoAdopciones);
  } catch (error) {
    console.error("Error al obtener el conteo de adopciones:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = getAdoptionUser;
