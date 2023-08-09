const { Router } = require('express');
const mascotaRouter = require('./mascotaRouter.js');


const router = Router();


router.use('/pet', mascotaRouter);



module.exports = router;
