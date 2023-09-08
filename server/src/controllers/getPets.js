const { Mascota } = require("../db");

// const getPets = async () => {
//   try {
//     const allpets = await Mascota.findAll();
//     if (!pets) return { status: 404, message: "No existen mascotas" };
//     return pets;
//   } catch (error) {
//     throw error;
//   }
// };

//HAGO ESTO PARA QUE SOLO SE VEAN LAS MASCOTAS QUE ESTAN CON EL ESTADO "En Adopcion"

const getPets = async () => {
  try {
    const allPets = await Mascota.findAll();
    // console.log(allPets)
    // console.log(allPets)
    return allPets;
  } catch (error) {
    console.error("Error al obtener las mascotas:", error);
    throw { status: error?.status, message: error?.message };
  }
};

module.exports = getPets;
