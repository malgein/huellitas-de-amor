
const { Router } = require('express');
const getMascotas = require('../controllers/getMascotas');
const postMascotas = require('../controllers/postMascotas');
const getMascotaById = require('../controllers/getMascotaById');
const getMascotaByName = require('../controllers/getMascotaByName,');


const router = Router();

router.get('/mascotas', getMascotas)
router.get('/mascotas/name', getMascotaByName)  
router.get('/mascotas/:id', getMascotaById)
router.post('/mascotas', postMascotas)



module.exports = router;
