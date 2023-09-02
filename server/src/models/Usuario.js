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
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      acerca: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};
