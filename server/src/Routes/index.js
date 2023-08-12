
const { Router } = require('express');
const getMascotas = require('../controllers/getMascotas');
const postMascotas = require('../controllers/postMascotas');



const router = Router();

router.get('/mascotas', getMascotas)
router.post('/mascotas', postMascotas)



module.exports = router;
