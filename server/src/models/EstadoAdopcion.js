const { dataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "estadoAdopcion",
    {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      estado: {
        type: dataTypes.ENUM("Adoptado", "En adpción", "En proceso"),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
