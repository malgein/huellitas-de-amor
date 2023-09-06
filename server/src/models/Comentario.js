const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo

module.exports = (sequelize) => {
  sequelize.define(
    "comentario",
    {
      id: {
        type: DataTypes.UUID,
     
        primaryKey: true,
      },
      texto: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
