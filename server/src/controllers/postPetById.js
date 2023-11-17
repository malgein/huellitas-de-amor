const { Mascota, Especie, CasaDeAdopcion} = require("../db");
const { Op } = require("sequelize");

const postPetById = async ({
  nombre,
  edad,
  sexo,
  descripcion,
  foto,
  tamano,
  raza,
  peso,
  especie,
  casaDeAdopcionId
}) => {
  try {
    if (
      !nombre ||
      !edad ||
      !sexo ||
      !descripcion ||
      !foto ||
      !tamano ||
      !raza ||
      !peso ||
      !especie 
      // !casaDeAdopcionId
    ) {
      return { status: 401, message: "Faltan datos" };
    }

    const createPet = await Mascota.create({
      nombre,
      edad,
      sexo,
      descripcion,
      foto,
      tamano,
      raza,
      peso,
    });
    console.log(createPet)
    //const mascEsp = await Especie.findAll({where: {especie: {[Op.in]:especie}}});

    if(casaDeAdopcionId){
      //Aqui buscamos la casa de adopcion mediante al id suministrado del front-end
      const casaAdopcion = await CasaDeAdopcion.findByPk(casaDeAdopcionId);
      if(!casaAdopcion){
        return {message:"No se encontro la casada de adopción"}
      }
      //Establecemos la relacion entre la csa de adopcion con el id suministrado y la mascota que crearemos
      await createPet.setCasaDeAdopcion(casaAdopcion);
      //y retornamos la csa de adpcion recien creada
      return createPet
    }
      // return { message: 'Mascota creada y relacionada con la Casa de Adopción correctamente' };
    
      // Manejar el caso donde la Casa de Adopción no existe
      return createPet

    // let mascEsp = await Especie.findOne({ where: { especie } }); // Buscar la especie
    // // await createPet.setEspecie(mascEsp);

    // if (!mascEsp) {
    //   mascEsp = await Especie.create({ especie }); // Crear la especie si no existe
    // }

    // await createPet.setEspecie(mascEsp);
    // await createPet.setCasaDeAdopcion(casaDeAdopcionId);
    // return createPet;

 
  } catch (error) {
    throw { error: error?.status, message: error?.message };
  }
};
module.exports = postPetById;
