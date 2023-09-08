const { Usuario } = require("../db.js");

const modCompleteUser = async (id, updatedData) => {
  try {
    // Buscamos el usuario por su ID en la base de datos
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    // Actualizar las propiedades del usuario
    usuario.nombre = updatedData.nombre;
    usuario.apellido = updatedData.apellido;
    usuario.nacionalidad = updatedData.nacionalidad;
    usuario.ubicacion = updatedData.ubicacion;
    usuario.direccion = updatedData.direccion;
    usuario.telefono = updatedData.telefono;
    usuario.acerca = updatedData.acerca;
    usuario.email = updatedData.email;
    usuario.password = updatedData.password;
    usuario.imagenPerfil = updatedData.imagenPerfil;
    usuario.imagenPortada = updatedData.imagenPortada;

    // Guardar los cambios en la base de datos
    await usuario.save();

    return { mensaje: "Propiedades modificadas exitosamente" };
  } catch (error) {
    console.error(error);
    return { mensaje: "Error en el servidor" };
  }
};

module.exports = modCompleteUser;
