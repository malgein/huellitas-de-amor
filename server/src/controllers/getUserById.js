const { Usuario, TipoDeUsuario, Donacion} = require("../db.js");

const getUserById = async (id) => {

  try {
    // Buscamos la mascota por su ID en la base de datos
    const usuario = await Usuario.findByPk(id, {
      include: [
        {
          model: TipoDeUsuario,
           // Alias opcional para TipoDeUsuario
        },
        {
          model: Donacion,
         // Alias opcional para Donaciones
        },
      ],
    });

    if (!usuario) {
      return ({ mensaje: "Usuario no encontrado" });
    }

    // Guardamos los cambios en la base de datos

    return usuario
  } catch (error) {
    console.error(error);
   throw { status: error?.status, message: error?.message };
  }
}

module.exports = getUserById;