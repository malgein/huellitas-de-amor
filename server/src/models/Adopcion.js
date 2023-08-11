const { dataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "adopciones",
    {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      fechaAdopcion: {
        type: dataTypes.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
