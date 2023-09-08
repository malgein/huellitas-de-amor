const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define(
        "FormularioAdop", 
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },  
            nombre: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            apellido: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            DNI:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            direccion: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            localidad: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            estado: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            pais: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            telefono: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },


        },
        {
            tableName: 'formularioAdop',
            timestamps: false,
        }
    )


    } ;     
    
