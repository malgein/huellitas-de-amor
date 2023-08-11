const { dataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "donaciones",
    {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      fechaDonacion: {
        type: dataTypes.DATE,
        allowNull: false,
      },
      monto: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      estadoDonacion: {
        type: dataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
