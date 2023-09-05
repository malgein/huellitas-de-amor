const {Usuario, Donacion, CasaDeAdopcion} = require('../db')
// Sincroniza los modelos con la base de datos (esto crea las tablas si no existen)
// sequelize.sync({ force: false }) // Si "force" es true, eliminará las tablas existentes y las recreará
  
const donationsUserSelect = async() => {
	
	try {
    // Busca el usuario por ID junto con su TipoDeUsuario asociado
    const donaciones = await Donacion.findAll({
        include: [
            {
              model: Usuario,
          // Alias opcional para TipoDeUsuario
            },
            {
              model: CasaDeAdopcion,
         // Alias opcional para CasasDeAdopcion
            },
          ],
    });

    if (!donaciones) {
      return { error: 'Donaciones no encontradas.' }
    }

    return donaciones;
  } catch (error) {
    console.error('Error al obtener la donacion con el usuario', error);
    return { error: `Error interno del servidor. ${error.message}` };
  }
}

module.exports = donationsUserSelect