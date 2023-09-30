const { Usuario } = require('../db'); // Asegúrate de importar tu modelo de usuario

// Ruta para cambiar el tipo de usuario
const changeUserStatus = async (req, res) => {
  try {
    const userId = req.params.id; // Obtiene el ID del usuario de los parámetros de la URL
    const { nuevoTipoDeUsuario } = req.body; // Obtiene el nuevo tipo de usuario del cuerpo de la solicitud

    // Busca al usuario por su ID en la base de datos
    const usuario = await Usuario.findByPk(userId);

    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    // Actualiza el tipo de usuario
    usuario.tipoDeUsuario = nuevoTipoDeUsuario;
    await usuario.save();

    res.status(200).json({ mensaje: 'Tipo de usuario actualizado con éxito' });
  } catch (error) {
    console.error('Error al cambiar el tipo de usuario:', error);
    res.status(500).json({ mensaje: 'Error al cambiar el tipo de usuario' });
  }
};

module.exports = changeUserStatus;
