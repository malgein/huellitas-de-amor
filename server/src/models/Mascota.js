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
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sexo: {
        type: DataTypes.ENUM("Macho", "Hembra"),
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      foto: {
        type: DataTypes.JSON, // Cambiado a JSON para representar un array de URLs
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
      estado: {
        type: DataTypes.ENUM('Adoptado', 'En adopción', 'En Proceso'),
        defaultValue: 'En adopción',
        allowNull: false
      },

    },
    {
      timestamps: false,
    }
    
  );
};
