const { Usuario } = require("../db");

const postCrearUsuario = async ({
  nombre,
  apellido,
  email,
  password,
  nacionalidad,
  ubicacion,
  direccion,
  telefono,
  acerca,
}) => {
  try {
    if (
      !nombre ||
<<<<<<< HEAD
      !apellido ||
      !email ||
      !password ||
=======

      !apellido ||
      !password ||
      !email ||

>>>>>>> 0a6fbaac86367c091bc1aa60d71cf76e73d0e95e
      !nacionalidad ||
      !ubicacion ||
      !direccion ||
      !telefono ||
<<<<<<< HEAD
      !acerca
=======

      !acerca

>>>>>>> 0a6fbaac86367c091bc1aa60d71cf76e73d0e95e
    ) {
      return { status: 401, message: "Faltan datos" };
    }
    const nuevoUsuario = await Usuario.create({
      nombre,
      apellido,
      email,
      password,
      nacionalidad,
      ubicacion,
      direccion,
      telefono,
      acerca,
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
