// const { Mascota } = require("../db.js");

// const modPetById = async (req, res) => {

// 	const { id } = req.params;
//   const updatedData = req.body; // Aquí asumimos que el cuerpo de la solicitud contiene los datos actualizados

//   try {
//     // Buscamos la mascota por su ID en la base de datos
//     const mascota = await Mascota.findByPk(id);

//     if (!mascota) {
//       return res.status(404).json({ mensaje: "Mascota no encontrada" });
//     }

//     // Actualizamos las propiedades con los nuevos datos
//     Object.keys(updatedData).forEach(key => {
//       mascota[key] = updatedData[key];
//     });

//     // Guardamos los cambios en la base de datos
//     await mascota.save();

//     return res.status(200).json({ mensaje: "Propiedades modificadas exitosamente" });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ mensaje: "Error en el servidor" });
//   }
// }

// module.exports = modPetById;


const { Mascota } = require("../db.js");

const modPetById = async (id, updatedData) => {
console.log(id)
  try {
    // Buscamos la mascota por su ID en la base de datos
    const mascota = await Mascota.findByPk(id);

    if (!mascota) {
      return { error: true, mensaje: "Mascota no encontrada" };//para que devuelva un objeto o mensaje específico cuando no se encuentra la mascota, y luego manejar ese resultado en tu ruta.
    }
    console.log("Datos antes de actualizar:", mascota.dataValues);
    // Actualizamos las propiedades con los nuevos datos
    Object.keys(updatedData).forEach(key => {
      mascota[key] = updatedData[key];
      console.log("Datos después de actualizar:", mascota.dataValues);
    });

    // Guardamos los cambios en la base de datos
    await mascota.save();

    return { mensaje: "Propiedades modificadas exitosamente" }
  } catch (error) {
    console.error(error);
    return { mensaje: "Error en el servidor" }
  }
}

module.exports = modPetById;

