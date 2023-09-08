const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
module.exports = (sequelize) => {
  sequelize.define(
    "casaDeAdopcion",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      foto: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      nombreDeOng: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      nombreDeContacto: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      telefono: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      rating: {
        type: DataTypes.FLOAT,
        default: 0,
      },
      ratings: {
        type: DataTypes.ARRAY(DataTypes.FLOAT),
        default: [],
      },
      ubicacion: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      // comments: {
      // 	type: DataTypes.ARRAY(DataTypes.JSON),
      // 	default: [],
      // }
    },
    { timestamps: false }
  );
};
