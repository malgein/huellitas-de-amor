const { CasaDeAdopcion } = require("../db");
//Para no mover el id del modelo (no tiene autoincrement), voy a pedir el id por ahora
const postCasaDeAdopcion = async ({
  id,
  nombreDeOng,
  nombreDeContacto,
  email,
  telefono,
}) => {
  try {
    if (!nombreDeOng || !nombreDeContacto || !email || !telefono) {
      return { status: 401, message: "Faltan datos" };
    }

    const createCasaDeAdopcion = await CasaDeAdopcion.create({
      id,
      nombreDeOng,
      telefono,
      email,
      nombreDeContacto,
    });
    console.log(createCasaDeAdopcion);
    return createCasaDeAdopcion;
  } catch (error) {
    throw { error: error?.status, message: error?.message };
  }
};

module.exports = postCasaDeAdopcion;
