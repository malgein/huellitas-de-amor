const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.



module.exports = (sequelize) => {

  sequelize.define('tipoDeUsuario', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    tipo: {
      type: DataTypes.ENUM('Administrador', 'Centro De Adopcion', 'Usuario'),
      allowNull: false,
    },
  }, { timestamps: false });

};
