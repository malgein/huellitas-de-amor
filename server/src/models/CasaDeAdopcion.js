const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
module.exports = (sequelize) => {
  sequelize.define(
		"casaDeAdopcion",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
			},
			foto: {
				type: DataTypes.JSON, // Cambiado a JSON para representar un array de URLs
        allowNull: false,
			},
			nombreDeOng: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			nombreDeContacto: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			telefono: {
				type: DataTypes.STRING(15),
				allowNull: false,
			},
			rating: {
				type: DataTypes.INTEGER,
				default: 0,
			},
			ratings: {
				type: DataTypes.ARRAY(DataTypes.INTEGER),
				default: [],
			},
			ubicacion: {
        type: DataTypes.STRING(50),
        allowNull: false,
      }
		},
		{ timestamps: false }
	);
};
