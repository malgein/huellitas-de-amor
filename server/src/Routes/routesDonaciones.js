const { Router } = require("express");
const router = Router();

const getAllDonations = require('../controllers/getAllDonations')
const fillDonations = '../utils/fillDonations'


router.get('/', async(req,res) => {
  try{
    const data = await getAllDonations()

    return res.status(200).json(data)
  }catch(error){
    res.status(500).json({message: error.message})
  }
})

router.get('/fill',  async (req, res) => {
    try {
          //Esta linea de codigo borra la tabla para asegurarse que no se vuelva a rescribir la informacion que le estamos a punto de pasar
      
  
      // Llena la tabla con los datos de users que al final son los datos de data.js es decir todas los usuarios
      // await Usuario.bulkCreate(allUsers);
  
      //Llama llenarUsuario que usa un metodo de sequelize llamado bulkCreate que llena la la base de datos con data de usuarios validos
  
      
      const getFill = () => fillDonations()
      
       getFill()
  
      res.status(200).json({ message: 'Datos de donaciones llenados exitosamente' });
    } catch (error) {
      console.log('Error al llenar los datos:', error);
      res.status(500).json({ error: 'Error al llenar los datos de las donaciones' });
    }
  })

	//Ruta que me trae todos los usuarios de la base de datos necesario para la gestion de usuarios en el componente admin


	module.exports = router;