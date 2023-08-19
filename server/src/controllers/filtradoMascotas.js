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

// // module.exports = router; 
//Modificado y que anda
// const {Mascota, Especie} = require('../db');


// const filtradoMascotas = async (req) => {
// try {
// const { edad, sexo, tamano, raza, especie, peso } = req.query;

// const query = {};

// if (edad) query.edad = edad;
// if (sexo) query.sexo = sexo;
// if (tamano) query.tamano = tamano;
// if (raza) query.raza = raza;
// if (especie) query.especie = especie;
// if (peso) query.peso = peso;


// // const mascotas = await Mascota.findAll({ where: query },{include: [Especie]});
// const mascotas = await Mascota.findAll({ where: query, include: [Especie] });


// return mascotas;


// } catch (error) {
// return {status: 500, message: error.message};
// }
// };


// module.exports = filtradoMascotas;

//prueba pasando de numeros q recibo de db a string por rangos (Nacho)
const { Mascota, Especie } = require('../db');
const { Op } = require("sequelize");

const getPesoRango = (categoria) => {
    switch (categoria) {
        case "Ligero":
            return { [Op.lte]: 5 };  // <= 5
        case "Mediano":
            return { [Op.gt]: 5, [Op.lte]: 15 };  // > 5 y <= 15
        case "Pesado":
            return { [Op.gt]: 15 };  // > 15
        default:
            return {};
    }
}
const getEdadRango = (categoria) => {
    switch (categoria) {
        case "Cachorro":
            return { [Op.lte]: '1' };  // <= 1
        case "Junior":
            return { [Op.gt]: '2', [Op.lte]: '3' };  // > 2 y <= 3
        case "Adulto":
            return { [Op.gt]: '4' };  // > 4
        default:
            return {};
    }
}

const filtradoMascotas = async (req) => {
    try {
        const { edad, sexo, tamano, raza, especie, peso } = req.query;
        
        const query = {};
        
        if (sexo) query.sexo = sexo;
        if (tamano) query.tamano = tamano;
        if (raza) query.raza = raza;
        if (especie) query.especie = especie;
        
        if (peso) {
            query.peso = getPesoRango(peso);
        }
        if (edad){
            query.edad = getEdadRango(edad);
        }

const mascotas = await Mascota.findAll({ where: query },{include: [Especie]});


return mascotas;

    } catch (error) {
        return {status: 500, message: error.message};
    }
};

module.exports = filtradoMascotas;
