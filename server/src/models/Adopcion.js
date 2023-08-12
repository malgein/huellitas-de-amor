const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "adopcion",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      fechaAdopcion: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
