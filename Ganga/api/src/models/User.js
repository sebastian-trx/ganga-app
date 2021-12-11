const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define(
        "user",
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },

            name: {
                type: DataTypes.STRING,
            },

            surname: {
                type: DataTypes.STRING,
            },

            mail: {
                type: DataTypes.STRING,
            },

            password: {
                type: DataTypes.STRING,
            },

            cellphone: {
                type: DataTypes.BIGINT,
            },

            address: {
                type: DataTypes.STRING
            },

            country: {
                type: DataTypes.STRING,
            },

            province: {
                type: DataTypes.STRING,
            },

            cp: {
                type: DataTypes.STRING,
            },

            admin: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },

            birthdate: {
                type: DataTypes.DATEONLY,
            },

            image: {
                type: DataTypes.STRING,
            },

            seller: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },

            Cart: {
                type: DataTypes.ARRAY(DataTypes.JSON),
                defaultValue: [],
                // allowNull: false,
            },

            officialStore: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }

        },
        { timestamps: true, paranoid: true }
    );
};
