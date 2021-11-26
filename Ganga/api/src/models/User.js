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

            admin: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },

            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            birthdate: {
                type: DataTypes.DATEONLY,
            },

            lastname: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            mail: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            address: {
                type: DataTypes.STRING,
            },
            
            image: {
                type: DataTypes.STRING,
            },
            
            seller: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },

            password: {
                type: DataTypes.STRING,
              },

        },
        { timestamps: false, paranoid: true }
    );
};
