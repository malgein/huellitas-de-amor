const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "donacion",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      fechaDonacion: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      monto: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      estadoDonacion: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
