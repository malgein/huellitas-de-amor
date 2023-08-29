const { Usuario } = require("../db");

//Ruta para obtener todos los usuarios, necesario para listarlos todos y renderizarlos en el administrador admin
const getUsers = async () => {
  //trae todos los usuarios de la base de datos y los guarda en users en forma de json para luego retornarlos
  try {
    const users = await Usuario.findAll();

    if (!users) return { status: 404, message: "No existen usuarios" };
    return users;
  } catch (error) {
    return error;
  }
};

module.exports = getUsers;
