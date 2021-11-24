const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define(
        "product",
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },

            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },

            price: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },

            stock: {
                type: DataTypes.INTEGER,
            },

            image: {
                type: DataTypes.STRING,
            },
                        
        },
        { timestamps: false, paranoid: true }
    );
};
