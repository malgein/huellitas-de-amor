const { Mascota } = require("../db");

const postPetById = async ({
  id,
  nombre,
  edad,
  sexo,
  descripcion,
  foto,
  tamano,
  raza,
  peso,
}) => {
  try {
    if (
      !id ||
      !nombre ||
      !edad ||
      !sexo ||
      !descripcion ||
      !foto ||
      !tamano ||
      !raza ||
      !peso
    ) {
      return { status: 401, message: "Faltan datos" };
    }

    const createPet = await Mascota.create({
      id,
      nombre,
      edad,
      sexo,
      descripcion,
      foto,
      tamano,
      raza,
      peso,
    });
    //Llaves foraneas
    /* await createPet.setGenres(genres);
    await createPet.setPlatforms(platforms); */
    return createPet;
  } catch (error) {
    throw { error: error?.status, message: error?.message };
  }
};
module.exports = postPetById;
