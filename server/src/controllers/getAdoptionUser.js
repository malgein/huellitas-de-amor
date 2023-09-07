const express = require("express");
const router = express.Router();
const { Usuario, Adopcion } = require("../db"); // Importa tus modelos

const getAdoptionUser = async (req, res) => {
  try {
    const usuarioId = req.params.usuarioId;

    // Realiza una consulta para contar las adopciones del usuario
    const conteoAdopciones = await Adopcion.count({
      where: {
        usuarios: usuarioId, // Asegúrate de que esto coincida con el nombre de la columna en tu tabla "usuario_adopcion"
      },
    });

    res.json({ conteoAdopciones });
  } catch (error) {
    console.error("Error al obtener el conteo de adopciones:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = getAdoptionUser;
