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
        allowNull: false,
      },
      apellido: {
        type: DataTypes.STRING(50),
        allowNull: false,
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
        allowNull: false,
      },
      ubicacion: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      direccion: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      telefono: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      acerca: {
        type: DataTypes.TEXT(50),
        allowNull: false,
      },
      foto: {
        type: DataTypes.JSON, // Cambiado a JSON para representar un array de URLs
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
