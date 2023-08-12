const express = require('express');
const { mascota } = require('../models/Mascota'); 
const router = express.Router();

router.get('/mascotas', async (req, res) => {
  try {
    const { nombre, edad, sexo, tamano, raza } = req.query; 

    const query = {};
    if (nombre) query.nombre = nombre;
    if (edad) query.edad = edad;
    if (sexo) query.sexo = sexo;
    if (tamano) query.tamano = tamano;
    // if (raza) query.raza = raza; // ver si lo ponemos o no

    
    const mascotas = await mascota.findAll({ where: query });

    res.json(mascotas); // ver el json con los datos, tengamos en cuenta q esto hay q acomodarlo
  } catch (error) {
    res.status(500).send(error.message);// ver que le ponemos como mensaje
  }
});

module.exports = router; 
