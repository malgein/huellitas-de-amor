const { Usuario } = require("../db.js");

const modFotoPerfil = async (id, updatedData) => {
  try {
    // Buscamos el usuario por su ID en la base de datos
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    // Actualizar las propiedades del usuario
    usuario.imagenPerfil = updatedData.imagenPerfil;
    // usuario.imagenPortada = updatedData.imagenPortada;

    // Guardar los cambios en la base de datos
    await usuario.save();

    return { mensaje: "Foto de perfil modificada exitosamente" };
  } catch (error) {
    console.error(error);
    return { mensaje: "Error en el servidor" };
  }
};

module.exports = modFotoPerfil;
