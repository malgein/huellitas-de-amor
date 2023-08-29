const { Usuario } = require("../db");

const postCrearUsuario = async ({
  nombre,
  apellido,
  email,
  password,

  // nacionalidad,
  // ubicacion,
  // direccion,
  // telefono,
  // acerca,
}) => {
  try {
    if (!nombre || !apellido || !password || !email) {
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
    // return {
    //   status: 200,
    //   message: "Usuario creado exitosamente",
    //   user: nuevoUsuario,
    // };
  } catch (error) {
    throw { error: error?.status, message: error?.message };
  }
};

module.exports = postCrearUsuario;
