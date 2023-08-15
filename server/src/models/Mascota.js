const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "mascota",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      edad: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      sexo: {
        type: DataTypes.ENUM("Macho", "Hembra"),
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING(350),
        allowNull: false,
      },
      foto: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      tamano: {
        type: DataTypes.ENUM("Pequeño", "Mediano", "Grande"),
        allowNull: false,
      },
      raza: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      peso: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
