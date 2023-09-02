const { Mascota } = require("../db.js");

const modCompletePet = async (id, updatedData) => {

  try {
    // Buscamos la mascota por su ID en la base de datos
    const mascota = await Mascota.findByPk(id);

    if (!mascota) {
      return res.status(404).json({ mensaje: "Mascota no encontrado" });
    }

     // Actualizar las propiedades del mascota
     mascota.nombre = updatedData.nombre;
     mascota.edad = updatedData.edad;
     mascota.sexo = updatedData.sexo;
     mascota.descripcion = updatedData.descripcion;
     mascota.foto = updatedData.foto;
     mascota.tamano = updatedData.tamano;
     mascota.raza = updatedData.raza;
     mascota.peso = updatedData.peso;
 
     // Guardar los cambios en la base de datos
     await mascota.save();

    return { mensaje: "Propiedades modificadas exitosamente" }
  } catch (error) {
    console.error(error);
    return { mensaje: "Error en el servidor" }
  }
}

module.exports = modCompletePet;
