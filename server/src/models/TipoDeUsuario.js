const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo

module.exports = (sequelize) => {
  sequelize.define(
    "tipoDeUsuario",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      tipo: {
        type: DataTypes.ENUM("Administrador", "Centro De Adopcion", "Usuario", "Super Administrador"),
        allowNull: false,
        defaultValue: 'Usuario'
      },
    },
    { timestamps: false }
  );
};
