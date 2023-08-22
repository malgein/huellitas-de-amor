const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo

module.exports = (sequelize) => {
  sequelize.define(
    "favorito",
    {
      id: {
        type: DataTypes.INTEGER,
				autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      }
    },
    { timestamps: false }
  );
};
