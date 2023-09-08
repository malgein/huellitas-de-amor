const { CasaDeAdopcion } = require("../db");
//Para no mover el id del modelo (no tiene autoincrement), voy a pedir el id por ahora
const postCasaDeAdopcion = async ({
  nombreDeOng,
  nombreDeContacto,
  email,
  telefono,
  foto,
  ubicacion,
}) => {
  try {
    if (
      !nombreDeOng ||
      !nombreDeContacto ||
      !email ||
      !telefono ||
      !foto ||
      !ubicacion
    ) {
      return { status: 401, message: "Faltan datos" };
    }

    const createCasaDeAdopcion = await CasaDeAdopcion.create({
      nombreDeOng,
      telefono,
      email,
      nombreDeContacto,
      foto,
      ubicacion,
    });
    // console.log(createCasaDeAdopcion);
    return createCasaDeAdopcion;
  } catch (error) {
    throw { error: error?.status, message: error?.message };
  }
};

module.exports = postCasaDeAdopcion;
