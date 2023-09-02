const {Usuario, TipoDeUsuario} = require('../db')
// Sincroniza los modelos con la base de datos (esto crea las tablas si no existen)
// sequelize.sync({ force: false }) // Si "force" es true, eliminará las tablas existentes y las recreará
  
const findTypeUsers = async(req, res) => {
	// try {

	// 	const typeUsers = Usuario.findAll({
  //     include: TipoDeUsuario, // Esto cargará la asociación TipoDeUsuario
  //   }).then((usuarios) => {
  //     usuarios.forEach((usuario) => {
  //       // console.log(`${usuario.nombre} ${usuario.apellido} - ${usuario.TipoDeUsuario}`);
	// 			console.log(TipoDeUsuario)
  //     });
  //   });

	// 	res.status(200).json(typeUsers)
	// } catch (error) {
	// 	console.error('Error al sincronizar las tablas:', error);
	// 	res.status(500).send('Ocurrió un error en el servidor');
	// }

	try {
    const { id } = req.params;

    // Busca el usuario por ID junto con su TipoDeUsuario asociado
    const usuario = await Usuario.findByPk(id, {
      include: TipoDeUsuario,
    });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado.' });
    }

    return res.status(200).json(usuario);
  } catch (error) {
    console.error('Error al obtener el usuario con TipoDeUsuario:', error);
    return res.status(500).json({ error: 'Error interno del servidor.' });
  }
}

module.exports = findTypeUsers
