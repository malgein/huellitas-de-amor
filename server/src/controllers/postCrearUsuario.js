const { Usuario } = require("../db");

const postCrearUsuario = async ({ nombre, apellido, email, password }) => {
  try {
    if (!nombre || !apellido || !email || !password) {
      return { status: 401, message: "Faltan datos" };
    }
    const nuevoUsuario = await Usuario.create({
      nombre,
      apellido,
      email,
      password,
    });
    console.log(nuevoUsuario);
    return nuevoUsuario;
  } catch (error) {
    throw { error: error?.status, message: error?.message };
  }
};

module.exports = postCrearUsuario;
