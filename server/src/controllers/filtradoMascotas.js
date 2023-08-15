// const express = require('express');
// const { mascota } = require('../models/Mascota'); 
// const router = express.Router();

// router.get('/filtro', async (req, res) => {
//   try {
//     const {  edad, sexo, tamano, raza } = req.query; 

//     const query = {};
   
//     if (edad) query.edad = edad;
//     if (sexo) query.sexo = sexo;
//     if (tamano) query.tamano = tamano;
//     if (raza) query.raza = raza; 

    
//     const mascotas = await mascota.findAll({ where: query });

//     res.json(mascotas); // ver el json con los datos, tengamos en cuenta q esto hay q acomodarlo
//   } catch (error) {
//     res.status(500).send(error.message);// ver que le ponemos como mensaje
//   }
// });

// module.exports = router; 
const {Mascota, Especie} = require('../db');


const filtradoMascotas = async (req) => {
try {
const { edad, sexo, tamano, raza, especie, peso } = req.query;

const query = {};

if (edad) query.edad = edad;
if (sexo) query.sexo = sexo;
if (tamano) query.tamano = tamano;
if (raza) query.raza = raza;
if (especie) query.especie = especie;
if (peso) query.peso = peso;


const mascotas = await Mascota.findAll({ where: query });


return mascotas;


} catch (error) {
return {status: 500, message: error.message};
}
};


module.exports = filtradoMascotas;