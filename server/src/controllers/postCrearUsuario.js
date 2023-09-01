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
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
    if (!nombre || !apellido || !password || !email) {
=======
    if (
      !nombre ||
      !apellido ||
      !password ||
      !email
      // !nacionalidad ||
      // !ubicacion ||
      // !direccion ||
      // !telefono ||
      // !acerca
    ) {
>>>>>>> 0e368b0710ff932123d375a7c2302470571c3276
>>>>>>> qa
      return { status: 401, message: "Faltan datos" };
    }
    const nuevoUsuario = await Usuario.create({
      nombre,
      apellido,
      email,
      password,
<<<<<<< HEAD
      nacionalidad,
      ubicacion,
      direccion,
      telefono,
      acerca,
=======
<<<<<<< HEAD
=======
      // nacionalidad,
      // ubicacion,
      // direccion,
      // telefono,
      // acerca,
>>>>>>> 0e368b0710ff932123d375a7c2302470571c3276
>>>>>>> qa
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
