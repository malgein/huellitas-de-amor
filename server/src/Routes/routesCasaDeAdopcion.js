const { Router } = require("express");
const router = Router();
const postCasaDeAdopcion = require("../controllers/postCasaDeAdopcion");
const fillHomes = require('../utils/fillHomes')
const getAllHomes = require('../controllers/getAllHomes')
const modHouseById = require('../controllers/modHouseById')
const deleteHouseAdoptionById = require('../controllers/deleteHouseAdoption')

const modCompleteHouse = require('../controllers/modCompleteHouse')
// const getHouseById = require('../controllers/getHouseById')


const postRatings = require("../controllers/postRatings")
const postHouseComments=require('../controllers/postHouseComments')


const getCasaById = require("../controllers/getCasaById");
const getComentarios = require("../controllers/getComentarios");

router.post("/", async (req, res) => {
  try {
    const response = req.body;
    const casaPost = await postCasaDeAdopcion(response);
    res.status(200).json(casaPost);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
});

router.get('/fill', async (req, res) => {
  try {
		//Esta linea de codigo borra la tabla para asegurarse que no se vuelva a rescribir la informacion que le estamos a punto de pasar
    

    // Llena la tabla con los datos de users que al final son los datos de data.js es decir todas los usuarios
    // await Usuario.bulkCreate(allUsers);

    //Llama llenarUsuario que usa un metodo de sequelize llamado bulkCreate que llena la la base de datos con data de usuarios validos


    const getFill = () => fillHomes()
    
     getFill()

    res.status(200).json({ message: 'Datos de casas de adopcion llenados exitosamente' });
  } catch (error) {
    console.error('Error al llenar los datos:', error);
    res.status(500).json({ error: 'Error al llenar los datos de las casas de adopcion' });
  }
})

router.get('/', async(req,res) => {
  try{
    const data = await getAllHomes()
  
    return res.status(200).json(data)
  }catch(error){
    res.status(500).json({message: error.message})
  }
})

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = req.body
    console.log(req.body)
    const houseId =  await modHouseById(id, response);
    return res.status(200).json(houseId);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error en el servidor" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const petId = await getCasaById(id);
    res.status(200).json(petId);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const houseId =  await deleteHouseAdoptionById(id);
    return res.status(200).json(houseId);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error en el servidor" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = req.body
    console.log(response)
    const houseId =  await modCompleteHouse(id, response);
    return res.status(200).json(houseId);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error en el servidor" });
  }
});

router.post("/:id/ratings", postRatings)
router.post("/:id/comments", postHouseComments);
router.get("/:id/comments", getComentarios)


//!Mi csa por id pero Oziel se me adelanto y ya la creo
// router.get("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const houseId =  await getHouseById(id);
//     return res.status(200).json(houseId);
//   } catch (error) {
//     return res.status(500).json({ mensaje: "Error en el servidor" });
//   }
// });




module.exports = router;
