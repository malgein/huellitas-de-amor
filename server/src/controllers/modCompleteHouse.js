const { CasaDeAdopcion } = require("../db.js");

const modCompleteHouse = async (id, updatedData) => {

  try {
    // Buscamos la mascota por su ID en la base de datos
    const casaDeAdopcion = await CasaDeAdopcion.findByPk(id);

    if (!casaDeAdopcion) {
      return res.status(404).json({ mensaje: "Casa de adopcion no encontrada" });
    }

     // Actualizar las propiedades del mascota
     casaDeAdopcion.foto = updatedData.foto;
     casaDeAdopcion.nombreDeOng = updatedData.nombreDeOng;
     casaDeAdopcion.nombreDeContacto = updatedData.nombreDeContacto;
     casaDeAdopcion.email = updatedData.email;
     casaDeAdopcion.telefono = updatedData.telefono;
     casaDeAdopcion.ubicacion = updatedData.ubicacion;

     // Guardar los cambios en la base de datos
     await casaDeAdopcion.save();

    return { mensaje: "Propiedades modificadas exitosamente" }
  } catch (error) {
    console.error(error);
    return { mensaje: "Error en el servidor" }
  }
}

module.exports = modCompleteHouse;
