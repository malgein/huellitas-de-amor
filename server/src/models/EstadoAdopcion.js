const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "estadoAdopcion",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      estado: {
        type: DataTypes.ENUM("Adoptado", "En adpción", "En proceso"),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
