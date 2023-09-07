const { Usuario, TipoDeUsuario } = require('../db'); // Importa tus modelos de Sequelize

// Función para establecer la relación entre un usuario y un tipo de usuario
async function usuarioTipoController(req, res) {
  try {
    console.log(req.body)
    const { usuarioId, tipoDeUsuarioId } = req.body;


    // Verifica si el usuario y el tipo de usuario existen
    // const allUsers = await Usuario.findAll()
    const usuario = await Usuario.findByPk(usuarioId);
    const tipoDeUsuario = await TipoDeUsuario.findByPk(tipoDeUsuarioId);
    
    // console.log(allUsers)

    if (!usuario || !tipoDeUsuario) {
      return res.status(404).json({ error: 'Usuario o tipo de usuario no encontrado.' });
    }

    // Establece la relación
    usuario.setTipoDeUsuario(tipoDeUsuario);

    return res.status(200).json({ message: 'Relación establecida con éxito.' });
  } catch (error) {
    console.error('Error al establecer la relación:', error);
    return res.status(500).json({ error: 'Error interno del servidor.' });
  }
}

module.exports = usuarioTipoController