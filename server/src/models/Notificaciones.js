const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        "Notificaciones",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            // nombre: {
            //     type: DataTypes.STRING(50),
            //     allowNull: false,
            // },
            // apellido: {
            //     type: DataTypes.STRING(50),
            //     allowNull: false,
            // },
            // email: {
            //     type: DataTypes.STRING,
            //     allowNull: false,
            // },
            contenido: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            // fecha_creacion: {
            //     type: DataTypes.DATE,
            //     defaultValue: DataTypes.NOW
            // },
            leido: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            tipo: {
                type: DataTypes.STRING,
                allowNull: true
            }
        },
        {
            tableName: 'notificaciones',
            timestamps: true,
        }
    );
};

