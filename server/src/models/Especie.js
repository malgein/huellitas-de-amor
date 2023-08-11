const { dataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "especie",
    {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      especie: {
        type: dataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
