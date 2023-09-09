const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelos
module.exports = (sequelize) => {
  sequelize.define(
    "usuario",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      apellido: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      password: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      nacionalidad: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      ubicacion: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      direccion: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      telefono: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      acerca: {
        type: DataTypes.TEXT(50),
        allowNull: true,
      },
      imagenPerfil: {
        type: DataTypes.JSON, // Puedes ajustar el tipo de dato según tu necesidad
        allowNull: true, // Puede ser nulo si el usuario no ha subido una imagen de perfil
        defaultValue:
          "https://st2.depositphotos.com/4155479/6909/v/450/depositphotos_69099741-stock-illustration-labrador-retriever.jpg",
      },
      imagenPortada: {
        type: DataTypes.JSON, // Puedes ajustar el tipo de dato según tu necesidad
        allowNull: true, // Puede ser nulo si el usuario no ha subido una imagen de portada
        defaultValue:
          "https://st4.depositphotos.com/11498520/23294/v/450/depositphotos_232945258-stock-illustration-dog-paw-seamless-pattern-heart.jpg",
      },
    },
    { timestamps: false }
  );
};
