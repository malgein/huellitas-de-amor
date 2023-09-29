const { Usuario , Donacion, Mascota} = require("../db");

// Ruta para obtener un usuario por su ID
const getUsersId = async (req, res) => {
  const id = req.params.id;
  console.log(id);

  try {
    const user = await Usuario.findOne({
      where: { id },
      include: [
				{
					model: Donacion,
					// Alias opcional para Donaciones
				},
				{
					model: Mascota,
					// Alias opcional para Donaciones
				},
			],
			raw: true, 
    });

    if (!user) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
    console.log(user);
    
    res.status(200).json(user);
  } catch (error) {
    // res.status(500).json({ mensaje: "Error en el servidor" });

    console.log(error);
    return error;
  }
};

module.exports = getUsersId;
