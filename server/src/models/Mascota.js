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
        //?Tuve que cambiar el ripo de dataTypes porque las descripciones pueden ser muy largas
        // type: DataTypes.STRING(250),
        type: DataTypes.TEXT,
        allowNull: false,
      },
      foto: {
        //?Tuve que cambiar el ripo de dataTypes porque las url pueden ser muy largas
        // type: DataTypes.STRING(150),
        type: DataTypes.TEXT,
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
