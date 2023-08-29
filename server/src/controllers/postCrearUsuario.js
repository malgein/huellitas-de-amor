const { Usuario } = require("../db");

const postCrearUsuario = async ({
  nombre,
  password,
  apellido,
  nacionalidad,
  ubicacion,
  direccion,
  telefono,
  acerca,
  email,
}) => {
  try {
    if (
      !nombre ||
      !password ||
      !apellido ||
      !nacionalidad ||
      !ubicacion ||
      !direccion ||
      !telefono ||
      !acerca ||
      !email
    ) {
      return { status: 401, message: "Faltan datos" };
    }
    const nuevoUsuario = await Usuario.create({
      nombre,
      password,
      apellido,
      nacionalidad,
      ubicacion,
      direccion,
      telefono,
      acerca,
      email,
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
